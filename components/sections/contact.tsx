"use client";

import { useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, XCircle } from "lucide-react";

import { createContactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { useDictionary } from "@/contexts/locale-context";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const { siteConfig, contact } = useDictionary();
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const schema = useMemo(() => createContactFormSchema(contact.validation), [contact.validation]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  function onSubmit(values: ContactFormValues) {
    setStatus(null);
    startTransition(async () => {
      const result = await submitContactForm(values);
      setStatus({ type: result.success ? "success" : "error", message: contact.status[result.code] });
      if (result.success) reset();
    });
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-wide text-electric">{contact.kicker}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {contact.heading}
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">{contact.subheading}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                    <Mail className="h-4 w-4" />
                  </span>
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                    <Phone className="h-4 w-4" />
                  </span>
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                    <MapPin className="h-4 w-4" />
                  </span>
                  {siteConfig.location}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{contact.form.nameLabel}</Label>
                  <Input id="name" placeholder={contact.form.namePlaceholder} {...register("name")} />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{contact.form.emailLabel}</Label>
                  <Input id="email" type="email" placeholder={contact.form.emailPlaceholder} {...register("email")} />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{contact.form.companyLabel}</Label>
                  <Input id="company" placeholder={contact.form.companyPlaceholder} {...register("company")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{contact.form.subjectLabel}</Label>
                  <Input id="subject" placeholder={contact.form.subjectPlaceholder} {...register("subject")} />
                  {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">{contact.form.messageLabel}</Label>
                <Textarea id="message" placeholder={contact.form.messagePlaceholder} {...register("message")} />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <AnimatePresence mode="wait">
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`flex items-center gap-2 text-sm ${
                        status.type === "success" ? "text-emerald-500" : "text-red-500"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <XCircle className="h-4 w-4" />
                      )}
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button type="submit" variant="gradient" size="lg" disabled={isPending} className="ml-auto">
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> {contact.form.submitting}
                    </>
                  ) : (
                    contact.form.submit
                  )}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
