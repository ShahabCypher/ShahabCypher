import { useState, useCallback } from "react";

const useContactForm = (onSubmit) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validation rules
  const validateField = useCallback((name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (value.trim().length > 50)
          return "Name must be less than 50 characters";
        return "";

      case "email": {
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      }

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        if (value.trim().length > 4000)
          return "Message must be less than 4000 characters";
        return "";

      default:
        return "";
    }
  }, []);

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    return newErrors;
  }, [formData, validateField]);

  // Handle input changes
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error for this field if it exists
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }

      // Clear submit status when user starts typing
      if (submitStatus) {
        setSubmitStatus(null);
      }
    },
    [errors, submitStatus]
  );

  // Handle field blur for real-time validation
  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      const error = validateField(name, value);

      if (error) {
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [validateField]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Validate form
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        await onSubmit(formData);
        setSubmitStatus("success");

        // Reset form on successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      } catch (error) {
        setSubmitStatus("error");
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, onSubmit]
  );

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
    setSubmitStatus(null);
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};

export default useContactForm;
