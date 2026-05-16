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

            const { data: existingUser, error: existingUserError } = await supabase
        .from("internship_applications")
        .select("id")
        .or(`email.eq.${data.email},prn.eq.${data.prn}`)
        .maybeSingle();

      if (existingUserError && existingUserError.code !== "PGRST116") {
        throw existingUserError;
      }

      if (existingUser) {
        toast.dismiss("submit-loading");

        toast.error(
          "This email or PRN is already registered for the internship."
        );

        setIsSubmitting(false);
        return;
      }

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

      <Section className="py-10 sm:py-14 lg:py-[4.5rem]">
        <Container stack narrow>
          <header className="section-heading">
            <p className="mb-3 inline-flex items-center justify-center gap-2 font-label text-xs uppercase tracking-[0.14em] text-teal-700 sm:mb-4">
              <FileText className="h-4 w-4 shrink-0" aria-hidden />
              Application Form
            </p>
            <h1 className="font-display text-balance text-[clamp(1.875rem,4vw+0.65rem,3rem)] font-semibold leading-[1.12] text-ink">
              Apply For
              <span className="mt-1 block text-gradient-luxury sm:mt-1.5">
                Internship 2026
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
              Complete the form below to register for the Cosmolix Industrial Internship Program.
              All fields are required.
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel w-full p-5 sm:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full min-w-0">
              <motion.div
                layout
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6"
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
                className="mt-6 sm:mt-7"
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
                className="btn btn-luxury mt-7 w-full min-h-[3.25rem] justify-center gap-2 !py-3.5 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-8 sm:min-h-14 sm:!py-0"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <Send className="h-4 w-4 shrink-0" aria-hidden />
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
