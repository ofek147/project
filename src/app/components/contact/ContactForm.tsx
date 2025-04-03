"use client";

import React, { useState } from "react";
import { SendHorizonal, Check } from "lucide-react";
import { validateForm, Errors } from "@/app/data/formValidation";
import FormInput from "./FormInput";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formState);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formState);
      setFormState({ name: "", phone: "", email: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">השאירו פרטים</h2>
      <div className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),_0_4px_6px_-2px_rgba(0,0,0,0.05)] rounded-lg border-2 border-grey-400">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput
                name="name"
                placeholder="שם מלא"
                value={formState.name}
                onChange={handleChange}
                error={errors.name}
                disabled={isSubmitting}
              />
              <FormInput
                name="phone"
                placeholder="טלפון"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                error={errors.phone}
                disabled={isSubmitting}
              />
            </div>
            <FormInput
              name="email"
              placeholder="דוא״ל"
              type="email"
              value={formState.email}
              onChange={handleChange}
              error={errors.email}
              disabled={isSubmitting}
            />
            <FormInput
              name="message"
              placeholder="איך נוכל לעזור?"
              value={formState.message}
              onChange={handleChange}
              disabled={isSubmitting}
              isTextArea={true}
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`bg-green-800 hover:bg-green-900 text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 ease-in-out ${
                isSubmitting || isSubmitted
                  ? "cursor-not-allowed opacity-70"
                  : "cursor-pointer opacity-100"
              }`}
            >
              {isSubmitting ? (
                <span>שולח...</span>
              ) : isSubmitted ? (
                <>
                  <Check size={20} />
                  נשלח בהצלחה
                </>
              ) : (
                <>
                  <SendHorizonal size={20} />
                  שליחה
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
