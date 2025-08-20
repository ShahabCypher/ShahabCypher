import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
} from "lucide-react";

import FormInput from "components/modules/FormInput";
import FormTextarea from "components/modules/FormTextarea";
import ContactButton from "src/components/modules/ContactButton";
import useContactForm from "hooks/useContactForm";
import contactService from "services/contactService";

const ContactSection = () => {
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
    resetForm,
  } = useContactForm(handleFormSubmit);

  return (
    <section id="contact" className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray dark:text-soft-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-medium-gray dark:text-muted-gray max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-dark-gray dark:text-soft-white mb-6">
                Let's Connect
              </h3>
              <p className="text-medium-gray dark:text-muted-gray mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            {/* Contact Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-light-gray dark:bg-card-dark p-3 rounded-xl text-professional-blue dark:text-cyber-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-gray dark:text-soft-white">
                    Quick Response
                  </h4>
                  <p className="text-sm text-medium-gray dark:text-muted-gray">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-light-gray dark:bg-card-dark p-3 rounded-xl text-professional-blue dark:text-cyber-blue">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-gray dark:text-soft-white">
                    Professional Service
                  </h4>
                  <p className="text-sm text-medium-gray dark:text-muted-gray">
                    Quality work with clear communication
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-light-gray dark:bg-card-dark p-3 rounded-xl text-professional-blue dark:text-cyber-blue">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-gray dark:text-soft-white">
                    Free Consultation
                  </h4>
                  <p className="text-sm text-medium-gray dark:text-muted-gray">
                    Let's discuss your project requirements
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
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
                  <AlertCircle
                    className="text-red-600 dark:text-red-400"
                    size={20}
                  />
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
