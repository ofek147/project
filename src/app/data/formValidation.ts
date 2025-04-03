export interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface Errors {
  name?: string;
  phone?: string;
  email?: string;
}

export const validateForm = (formState: FormState): Errors => {
  const newErrors: Errors = {};

  if (!formState.name.trim()) newErrors.name = "נא להזין שם מלא";

  if (!formState.phone.trim()) {
    newErrors.phone = "נא להזין מספר טלפון";
  } else if (!/^0[2-9]\d{7,8}$/.test(formState.phone)) {
    newErrors.phone = "נא להזין מספר טלפון תקין";
  }

  if (!formState.email.trim()) {
    newErrors.email = "נא להזין כתובת דוא״ל";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
    newErrors.email = "נא להזין כתובת דוא״ל תקינה";
  }

  return newErrors;
};
