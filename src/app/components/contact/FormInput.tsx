import React from "react";

interface FormInputProps {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  disabled?: boolean;
  isTextArea?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  disabled,
  isTextArea = false,
}) => {
  const InputElement = isTextArea ? "textarea" : "input";

  return (
    <div>
      <InputElement
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full py-3 px-4 text-base rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        } transition-colors duration-200 ease-in-out ${
          isTextArea ? "h-26 resize-y" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
