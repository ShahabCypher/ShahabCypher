import { Mail, User, MessageSquare } from "lucide-react";

import ContactForm from "components/modules/ContactForm";

const ContactSection = () => {
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
