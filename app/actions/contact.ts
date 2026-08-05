"use server";

import { Resend } from "resend";

import { createClient } from "@/lib/supabase/server";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

const DEFAULT_TO_EMAIL = "aymansabir32@gmail.com";
const DEFAULT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

export type ContactStatusCode = "success" | "invalid" | "notConfigured" | "error";

export type ContactActionState = {
  success: boolean;
  code: ContactStatusCode;
};

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactActionState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, code: "invalid" };
  }

  const { name, email, company, subject, message } = parsed.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  const hasSupabase = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  if (!resendApiKey) {
    return { success: false, code: "notConfigured" };
  }

  let emailDelivered = false;

  try {
    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend failed to send contact email:", error);
    }
    emailDelivered = !error;
  } catch (err) {
    console.error("Resend threw while sending contact email:", err);
    emailDelivered = false;
  }

  if (hasSupabase) {
    try {
      const supabase = await createClient();
      const { error } = await supabase.from("contact_submissions").insert({
        name,
        email,
        company: company || null,
        subject,
        message,
      });
      if (error) {
        console.error("Supabase failed to store contact submission:", error);
      }
    } catch (err) {
      console.error("Supabase threw while storing contact submission:", err);
    }
  }

  if (emailDelivered) {
    return { success: true, code: "success" };
  }

  return { success: false, code: "error" };
}
