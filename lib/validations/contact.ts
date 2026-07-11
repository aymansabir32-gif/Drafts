import { z } from "zod";

import type { Dictionary } from "@/lib/i18n/types";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function createContactFormSchema(messages: Dictionary["contact"]["validation"]) {
  return z.object({
    name: z.string().trim().min(2, messages.nameMin).max(100, messages.nameMax),
    email: z.string().trim().email(messages.emailInvalid),
    company: z.string().trim().max(120, messages.companyMax).optional().or(z.literal("")),
    subject: z.string().trim().min(3, messages.subjectMin).max(150, messages.subjectMax),
    message: z.string().trim().min(10, messages.messageMin).max(2000, messages.messageMax),
  });
}
