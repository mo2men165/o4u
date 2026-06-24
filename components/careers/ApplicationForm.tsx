"use client";

import { useState, useEffect, useRef, type FormEvent, type ChangeEvent } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { Upload, Send } from "lucide-react";
import { Container } from "@/components/ui";

interface LocalFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  cv: File | null;
  coverMessage: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  position?: string;
  cv?: string;
}

const initialFormData: LocalFormData = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  cv: null,
  coverMessage: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface JobOption {
  id: string;
  title: string;
}

interface ApplicationFormProps {
  preselectedPosition?: string;
  embedded?: boolean;
  jobOptions?: JobOption[];
}

export default function ApplicationForm({
  preselectedPosition,
  embedded,
  jobOptions = [],
}: ApplicationFormProps) {
  const [formspreeState, handleFormspreeSubmit] = useForm("meeboybk");
  const [localData, setLocalData] = useState<LocalFormData>({
    ...initialFormData,
    position: preselectedPosition ?? "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const firestoreSaved = useRef(false);
  const pendingData = useRef<Omit<LocalFormData, "cv"> & { cvFileName: string; cvUrl: string } | null>(null);

  useEffect(() => {
    if (formspreeState.succeeded && !firestoreSaved.current && pendingData.current) {
      firestoreSaved.current = true;
      fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pendingData.current),
      }).catch(console.error);
      pendingData.current = null;
      setLocalData({ ...initialFormData, position: preselectedPosition ?? "" });
      const fileInput = document.getElementById("cv-upload") as HTMLInputElement | null;
      if (fileInput) fileInput.value = "";
    }
  }, [formspreeState.succeeded, preselectedPosition]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!localData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!localData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(localData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!localData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!localData.position) newErrors.position = "Please select a position.";
    if (!localData.cv) newErrors.cv = "Please upload your CV.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLocalData((prev) => ({ ...prev, cv: file }));
    if (errors.cv) setErrors((prev) => ({ ...prev, cv: undefined }));
    if (uploadError) setUploadError(null);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setUploadError(null);

    // Step 1: upload CV to Firebase Storage, get a shareable link
    let cvUrl = "";
    if (localData.cv) {
      setUploading(true);
      try {
        const uploadBody = new FormData();
        uploadBody.append("cv", localData.cv);
        const res = await fetch("/api/upload-cv", { method: "POST", body: uploadBody });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Upload failed.");
        cvUrl = json.url as string;
      } catch (err) {
        setUploading(false);
        setUploadError(err instanceof Error ? err.message : "Failed to upload CV. Please try again.");
        return;
      }
      setUploading(false);
    }

    // Step 2: submit text fields + CV link to Formspree (no file attachment)
    const fsData = new FormData();
    fsData.append("Full Name", localData.fullName);
    fsData.append("Email", localData.email);
    fsData.append("Phone", localData.phone);
    fsData.append("Position", localData.position);
    if (localData.coverMessage) fsData.append("Cover Message", localData.coverMessage);
    if (cvUrl) fsData.append("CV Link", cvUrl);

    pendingData.current = {
      fullName: localData.fullName,
      email: localData.email,
      phone: localData.phone,
      position: localData.position,
      coverMessage: localData.coverMessage,
      cvFileName: localData.cv?.name ?? "",
      cvUrl,
    };

    handleFormspreeSubmit(fsData);
  };

  const isLoading = uploading || formspreeState.submitting;

  const inputBase =
    "w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-3 font-body text-ink dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all duration-200 text-sm";
  const inputNormal = `${inputBase} border-gray-300 dark:border-white/10 focus:border-primary-400/50 focus:ring-primary-500/20`;
  const inputError = `${inputBase} border-red-500/50 focus:border-red-500/70 focus:ring-red-500/20`;

  const fieldClass = (field: keyof FormErrors) =>
    errors[field] ? inputError : inputNormal;

  const formEl = formspreeState.succeeded ? (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center"
    >
      <p className="font-heading font-bold text-ink dark:text-white text-xl mb-2">
        Application Received!
      </p>
      <p className="font-body text-ink/60 dark:text-white/60 text-sm">
        Thank you for applying. Our HR team will review your application and get back to you within 2 business days.
      </p>
    </motion.div>
  ) : (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-5 rounded-2xl border border-gray-200 dark:border-primary-700/50 bg-white dark:bg-primary-800 shadow-soft dark:shadow-none p-8 md:p-10"
      noValidate
    >
      {(formspreeState.errors != null || uploadError) && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-body text-red-400 text-sm">
          {uploadError ?? "Something went wrong. Please try again or contact us directly."}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="font-heading text-xs font-semibold text-ink/60 dark:text-white/60 uppercase tracking-widest mb-2 block">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={localData.fullName}
            onChange={handleChange}
            className={fieldClass("fullName")}
            placeholder="Your full name"
          />
          {errors.fullName && <p className="font-body text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="font-heading text-xs font-semibold text-ink/60 dark:text-white/60 uppercase tracking-widest mb-2 block">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={localData.email}
            onChange={handleChange}
            className={fieldClass("email")}
            placeholder="you@example.com"
          />
          {errors.email && <p className="font-body text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="font-heading text-xs font-semibold text-ink/60 dark:text-white/60 uppercase tracking-widest mb-2 block">
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={localData.phone}
            onChange={handleChange}
            className={fieldClass("phone")}
            placeholder="+20 1XX XXX XXXX"
          />
          {errors.phone && <p className="font-body text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="position" className="font-heading text-xs font-semibold text-ink/60 dark:text-white/60 uppercase tracking-widest mb-2 block">
            Position <span className="text-red-400">*</span>
          </label>
          {preselectedPosition ? (
            <input
              type="text"
              id="position"
              name="position"
              value={localData.position}
              readOnly
              className={`${fieldClass("position")} cursor-default opacity-70`}
            />
          ) : (
            <select
              id="position"
              name="position"
              value={localData.position}
              onChange={handleChange}
              className={`${fieldClass("position")} appearance-none`}
            >
              <option value="" className="bg-white dark:bg-primary-900 text-ink dark:text-white">Select a position</option>
              {jobOptions.map((job) => (
                <option key={job.id} value={job.title} className="bg-white dark:bg-primary-900 text-ink dark:text-white">
                  {job.title}
                </option>
              ))}
            </select>
          )}
          {errors.position && <p className="font-body text-red-400 text-xs mt-1">{errors.position}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cv-upload" className="font-heading text-xs font-semibold text-ink/60 dark:text-white/60 uppercase tracking-widest mb-2 block">
          Upload CV <span className="text-red-400">*</span>
        </label>
        <label
          htmlFor="cv-upload"
          className={`flex items-center gap-3 w-full rounded-xl border px-4 py-3 cursor-pointer transition-all duration-200 ${
            errors.cv
              ? "border-red-500/50 bg-red-500/5"
              : "border-gray-300 dark:border-primary-700/50 bg-white dark:bg-primary-900 hover:border-gray-400 dark:hover:border-primary-600/60"
          }`}
        >
          <Upload className="w-4 h-4 text-ink/40 dark:text-white/40 shrink-0" />
          <span className="font-body text-sm text-ink/40 dark:text-white/40">
            {localData.cv ? localData.cv.name : "PDF, DOC, or DOCX — max 5MB"}
          </span>
          <input
            type="file"
            id="cv-upload"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {errors.cv && <p className="font-body text-red-400 text-xs mt-1">{errors.cv}</p>}
      </div>

      <div>
        <label htmlFor="coverMessage" className="font-heading text-xs font-semibold text-ink/60 dark:text-white/60 uppercase tracking-widest mb-2 block">
          Cover Message{" "}
          <span className="text-ink/30 dark:text-white/30 font-normal normal-case tracking-normal text-xs">(optional)</span>
        </label>
        <textarea
          id="coverMessage"
          name="coverMessage"
          value={localData.coverMessage}
          onChange={handleChange}
          rows={4}
          className={`${inputNormal} resize-none`}
          placeholder="Tell us why you'd be a great fit..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 hover:bg-primary-400 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-4 font-heading text-sm font-bold text-white transition-all duration-200 hover:shadow-glow cursor-pointer"
      >
        {uploading ? "Uploading CV..." : formspreeState.submitting ? "Submitting..." : (
          <>
            Submit Application
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.form>
  );

  if (embedded) return formEl;

  return (
    <section id="application-form" className="bg-gray-50 dark:bg-primary-900 py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-600/10 blur-[100px] pointer-events-none" />

      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
            >
              Apply Now
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-ink dark:text-white mt-3"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Take the First Step
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-lg mx-auto"
            >
              Fill in your details and we will get back to you within 2 business days.
            </motion.p>
          </div>

          {formEl}
        </div>
      </Container>
    </section>
  );
}
