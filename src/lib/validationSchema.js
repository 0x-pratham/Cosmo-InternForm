import { z } from "zod";
import { INTERNSHIP_DOMAINS } from "./domains";

const namePattern = /^[\p{L}\s.'-]+$/u;

export const applicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .max(100, "Full name is too long")
    .regex(namePattern, "Full name contains invalid characters"),

  collegeName: z
    .string()
    .trim()
    .min(3, "College name is required")
    .max(150, "College name is too long"),

  prn: z
    .string()
    .trim()
    .min(3, "PRN / Enrollment ID is required")
    .max(50, "PRN / Enrollment ID is too long")
    .regex(/^[a-zA-Z0-9/_-]+$/, "PRN contains invalid characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address")
    .max(254, "Email is too long"),

  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number")
    .regex(/^[0-9+\s-]+$/, "Enter a valid phone number"),

  domain: z.enum(INTERNSHIP_DOMAINS, {
    error: "Please select a valid domain",
  }),

  motivation: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters")
    .max(2000, "Motivation must be 2000 characters or fewer"),
});
