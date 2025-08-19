import { forwardRef } from "react";

const ContactButton = forwardRef(
  (
    {
      children,
      type = "button",
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      onClick,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green text-white dark:text-dark-gray shadow-hero-card hover:shadow-professional-blue dark:hover:shadow-cyber-blue focus:ring-professional-blue dark:focus:ring-cyber-blue",
      secondary:
        "bg-light-gray dark:bg-card-dark text-dark-gray dark:text-soft-white shadow-hero-card hover:shadow-professional-blue dark:hover:shadow-cyber-blue focus:ring-professional-blue dark:focus:ring-cyber-blue",
      outline:
        "border-2 border-professional-blue dark:border-cyber-blue text-professional-blue dark:text-cyber-blue hover:bg-professional-blue dark:hover:bg-cyber-blue hover:text-white focus:ring-professional-blue dark:focus:ring-cyber-blue",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-6 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

ContactButton.displayName = "ContactButton";

export default ContactButton;
