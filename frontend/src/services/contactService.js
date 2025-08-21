import axios from "axios";

class ContactService {
  constructor() {
    this.baseURL = import.meta.env.VITE_FORM_API;
  }

  async submitContactForm(formData) {
    try {
      let userIp = null;
      try {
        const ipResponse = await axios.get(
          "https://api.ipify.org/?format=json"
        );
        userIp = ipResponse.data.ip;
      } catch (error) {
        // pass
      }

      formData = { ...formData, userIp: userIp };

      const response = await axios.post(`${this.baseURL}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.data;
    } catch (error) {
      throw new Error("Failed to send message. Please try again later.");
    }
  }

  validateContactData(formData) {
    const errors = {};

    // Name validation
    if (!formData.name || !formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email || !formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message || !formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  sanitizeContactData(formData) {
    return {
      name: formData.name?.trim() || "",
      email: formData.email?.trim().toLowerCase() || "",
      message: formData.message?.trim() || "",
    };
  }
}

const contactService = new ContactService();
export default contactService;
