import { Mail, User, MessageSquare } from "lucide-react";

import ContactForm from "components/modules/ContactForm";
import SocialIcons from "components/modules/SocialIcons";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray dark:text-soft-white mb-6 text-shadow-glow">
            Get In{" "}
            <span className="bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green bg-clip-text text-transparent text-shadow-none">
              Touch
            </span>
          </h2>
          <p className="text-lg text-medium-gray dark:text-muted-gray max-w-2xl mx-auto text-shadow-enhanced">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-dark-gray dark:text-soft-white mb-6 text-shadow-enhanced">
                Let's Connect
              </h3>
              <p className="text-medium-gray dark:text-muted-gray mb-8 text-shadow-enhanced">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            {/* Contact Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-light-gray/80 dark:bg-card-dark/80 backdrop-blur-sm p-3 rounded-xl text-professional-blue dark:text-cyber-blue transition-all duration-300 hover:bg-professional-blue hover:text-soft-white dark:hover:bg-cyber-blue dark:hover:text-dark-gray shadow-enhanced border border-blight/30 dark:border-bdark/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-gray dark:text-soft-white text-shadow-enhanced">
                    Quick Response
                  </h4>
                  <p className="text-sm text-medium-gray dark:text-muted-gray text-shadow-enhanced">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-light-gray/80 dark:bg-card-dark/80 backdrop-blur-sm p-3 rounded-xl text-professional-blue dark:text-cyber-blue transition-all duration-300 hover:bg-professional-blue hover:text-soft-white dark:hover:bg-cyber-blue dark:hover:text-dark-gray shadow-enhanced border border-blight/30 dark:border-bdark/30">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-gray dark:text-soft-white text-shadow-enhanced">
                    Professional Service
                  </h4>
                  <p className="text-sm text-medium-gray dark:text-muted-gray text-shadow-enhanced">
                    Quality work with clear communication
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-light-gray/80 dark:bg-card-dark/80 backdrop-blur-sm p-3 rounded-xl text-professional-blue dark:text-cyber-blue transition-all duration-300 hover:bg-professional-blue hover:text-soft-white dark:hover:bg-cyber-blue dark:hover:text-dark-gray shadow-enhanced border border-blight/30 dark:border-bdark/30">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-gray dark:text-soft-white text-shadow-enhanced">
                    Free Consultation
                  </h4>
                  <p className="text-sm text-medium-gray dark:text-muted-gray text-shadow-enhanced">
                    Let's discuss your project requirements
                  </p>
                </div>
              </div>
            </div>
            <SocialIcons />
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
        <SocialIcons mobile={true} />
      </div>
    </section>
  );
};

export default ContactSection;
