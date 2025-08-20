import { forwardRef } from "react";

const FormInput = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      value,
      onChange,
      onBlur,
      error,
      placeholder,
      required = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-dark-gray dark:text-soft-white mb-2"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
          w-full px-4 py-3 rounded-xl
          bg-light-gray dark:bg-card-dark
          border border-blight dark:border-bdark
          text-dark-gray dark:text-soft-white
          placeholder-medium-gray dark:placeholder-muted-gray
          focus:outline-none focus:ring-2 focus:ring-professional-blue dark:focus:ring-cyber-blue
          focus:border-transparent
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "ring-2 ring-red-500 border-red-500" : ""}
          ${className}
        `}
          {...props}
        />

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
