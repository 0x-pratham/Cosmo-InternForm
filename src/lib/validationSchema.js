import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters"),

  collegeName: z
    .string()
    .min(3, "College name is required"),

  prn: z
    .string()
    .min(3, "PRN / Enrollment ID is required"),

  email: z
    .string()
    .email("Enter a valid email address"),

  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number")
    .regex(/^[0-9+\s-]+$/, "Enter a valid phone number"),

  domain: z
    .string()
    .min(1, "Please select a domain"),

  motivation: z
    .string()
    .min(20, "Please write at least 20 characters"),
});