"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface LocalFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  // Create a separate Formspree form for contact at formspree.io and paste its ID below
  const [state, handleFormspreeSubmit] = useForm("xykqzrrz");

  const [localData, setLocalData] = useState<LocalFormData>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!localData.name.trim()) newErrors.name = "Name is required.";
    if (!localData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(localData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!localData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleFormspreeSubmit(new FormData(e.currentTarget));
  };

  const inputClasses = (fieldName?: keyof FormErrors) =>
    `w-full rounded-xl border ${
      fieldName && errors[fieldName]
        ? "border-red-500 dark:border-red-500"
        : "border-gray-300 dark:border-white/15"
    } bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 px-4 py-3 focus:border-primary dark:focus:border-primary-400 focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary-400/20 outline-none transition font-body`;

  if (state.succeeded) {
    return (
      <div id="contact-form" className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-green-50 border border-green-200 p-8 text-center"
        >
          <p className="font-heading font-bold text-green-800 text-lg mb-1">Message Sent!</p>
          <p className="font-body text-green-700 text-sm">
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div id="contact-form" className="max-w-2xl">
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
        noValidate
      >
        {state.errors != null && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-800 font-body">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        <div>
          <label htmlFor="name" className="font-medium text-gray-700 dark:text-white/70 mb-2 block">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={localData.name}
            onChange={handleChange}
            className={inputClasses("name")}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="font-medium text-gray-700 dark:text-white/70 mb-2 block">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={localData.email}
            onChange={handleChange}
            className={inputClasses("email")}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="font-medium text-gray-700 dark:text-white/70 mb-2 block">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={localData.phone}
            onChange={handleChange}
            className={inputClasses()}
            placeholder="+20 1XX XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="businessName" className="font-medium text-gray-700 dark:text-white/70 mb-2 block">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={localData.businessName}
            onChange={handleChange}
            className={inputClasses()}
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="message" className="font-medium text-gray-700 dark:text-white/70 mb-2 block">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={localData.message}
            onChange={handleChange}
            className={inputClasses("message")}
            placeholder="Tell us about your needs..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <Button type="submit" variant="primary" size="lg" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.form>
    </div>
  );
}
