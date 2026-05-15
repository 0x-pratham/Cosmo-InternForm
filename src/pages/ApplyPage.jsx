import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Send, FileText } from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import SuccessModal from "../components/common/SuccessModal";
import FormField from "../components/ui/FormField";
import { applicationSchema } from "../lib/validationSchema";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { INTERNSHIP_DOMAINS } from "../lib/domains";

function ApplyPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(applicationSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (!showSuccessModal) return undefined;

    const redirectTimer = setTimeout(() => {
      window.location.assign("https://cosmolix.co.in");
    }, 8000);

    return () => clearTimeout(redirectTimer);
  }, [showSuccessModal]);

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    if (!isSupabaseConfigured || !supabase) {
      toast.error("Application service is unavailable. Please try again later.");
      return;
    }

    setIsSubmitting(true);

    try {
      toast.loading("Submitting your application...", { id: "submit-loading" });

      const { error } = await supabase.from("internship_applications").insert([
        {
          full_name: data.fullName,
          college_name: data.collegeName,
          prn: data.prn,
          email: data.email,
          phone: data.phone,
          domain: data.domain,
          motivation: data.motivation,
        },
      ]);

      toast.dismiss("submit-loading");

      if (error) throw error;

      toast.success("Application submitted successfully!");
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      toast.dismiss("submit-loading");

      if (import.meta.env.DEV) {
        console.error(error);
      }

      const message =
        error?.code === "23505"
          ? "This email or PRN may already be registered."
          : "Submission failed. Please try again.";

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <SuccessModal isOpen={showSuccessModal} />

      <Section noPadding className="py-12 sm:py-16 lg:py-20">
        <Container stack narrow>
          <header className="section-heading">
            <p className="font-label uppercase text-xs text-teal-700 mb-4 inline-flex items-center justify-center gap-2">
              <FileText className="w-4 h-4 shrink-0" aria-hidden />
              Application Form
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">
              Apply For
              <span className="block text-gradient-luxury mt-1">
                Internship 2026
              </span>
            </h1>
            <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto">
              Complete the form below to register for the Cosmolix Industrial
              Internship Program. All fields are required.
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full rounded-3xl glass-panel p-6 sm:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
            >
              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                autoComplete="name"
                maxLength={100}
                error={errors.fullName?.message}
                registration={register("fullName")}
              />

              <InputField
                label="College Name"
                placeholder="Enter college name"
                autoComplete="organization"
                maxLength={150}
                error={errors.collegeName?.message}
                registration={register("collegeName")}
              />

              <InputField
                label="PRN / Enrollment ID"
                placeholder="Enter PRN"
                autoComplete="off"
                maxLength={50}
                error={errors.prn?.message}
                registration={register("prn")}
              />

              <InputField
                label="Email Address"
                placeholder="Enter email"
                type="email"
                autoComplete="email"
                maxLength={254}
                error={errors.email?.message}
                registration={register("email")}
              />

              <InputField
                label="Phone Number"
                placeholder="10-digit mobile number"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength={15}
                error={errors.phone?.message}
                registration={register("phone")}
              />

              <FormField label="Preferred Domain" error={errors.domain?.message}>
                <select
                  {...register("domain")}
                  className={`form-select ${errors.domain ? "is-invalid" : ""}`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Domain
                  </option>
                  {INTERNSHIP_DOMAINS.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </FormField>
            </motion.div>

            <FormField
              label="Why do you want to join this internship?"
              error={errors.motivation?.message}
              className="mt-5 sm:mt-6"
            >
              <textarea
                rows={5}
                maxLength={2000}
                {...register("motivation")}
                placeholder="Share your goals, interests, and what you hope to learn..."
                className={`form-textarea ${errors.motivation ? "is-invalid" : ""}`}
              />
            </FormField>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              className="mt-6 sm:mt-8 w-full h-14 rounded-2xl btn-luxury font-label text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Application
                  <Send className="w-4 h-4 shrink-0" aria-hidden />
                </>
              )}
            </motion.button>
            </form>
          </motion.div>
        </Container>
      </Section>
    </MainLayout>
  );
}

function InputField({
  label,
  placeholder,
  registration,
  error,
  type = "text",
  ...props
}) {
  return (
    <FormField label={label} error={error}>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        {...props}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
    </FormField>
  );
}

export default ApplyPage;
