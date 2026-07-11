import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(120, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, "Please add a short subject.")
    .max(150, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
