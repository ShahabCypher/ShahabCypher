import { Send, CheckCircle, AlertCircle } from "lucide-react";

import FormInput from "components/modules/FormInput";
import FormTextarea from "components/modules/FormTextarea";
import ContactButton from "components/modules/ContactButton";
import useContactForm from "hooks/useContactForm";
import contactService from "services/contactService";

const ContactForm = () => {
  const handleFormSubmit = async (formData) => {
    const sanitizedData = contactService.sanitizeContactData(formData);

    const response = await contactService.submitContactForm(sanitizedData);
    return response;
  };

  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm(handleFormSubmit);

  return (
    <div className="bg-light-gray dark:bg-card-dark p-8 rounded-2xl shadow-hero-card transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          placeholder="Your full name"
          disabled={isSubmitting}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />

        <FormTextarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
          placeholder="Tell me about your project or just say hello..."
          rows={5}
          disabled={isSubmitting}
        />

        {/* Submit Status Messages */}
        {submitStatus === "success" && (
          <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <CheckCircle
              className="text-green-600 dark:text-green-400"
              size={20}
            />
            <p className="text-green-700 dark:text-green-300 text-sm">
              Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
            <p className="text-red-700 dark:text-red-300 text-sm">
              Failed to send message. Please try again later.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <ContactButton
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full"
        >
          <Send size={20} />
          {isSubmitting ? "Sending..." : "Send Message"}
        </ContactButton>
      </form>
    </div>
  );
};

export default ContactForm;
