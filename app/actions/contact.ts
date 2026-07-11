"use server";

import { createClient } from "@/lib/supabase/server";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

export type ContactActionState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactActionState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return {
      success: false,
      message: "The contact form isn't configured yet. Please email directly instead.",
    };
  }

  const supabase = await createClient();
  const { company, ...rest } = parsed.data;

  const { error } = await supabase.from("contact_submissions").insert({
    ...rest,
    company: company || null,
  });

  if (error) {
    return {
      success: false,
      message: "Something went wrong while sending your message. Please try again.",
    };
  }

  return {
    success: true,
    message: "Thanks for reaching out — I'll get back to you shortly.",
  };
}
