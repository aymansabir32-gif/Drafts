"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, XCircle } from "lucide-react";

import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { siteConfig } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFormValues) {
    setStatus(null);
    startTransition(async () => {
      const result = await submitContactForm(values);
      setStatus({ type: result.success ? "success" : "error", message: result.message });
      if (result.success) reset();
    });
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-wide text-electric">Get in touch</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something with AI
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Open to full-time Marketing & AI roles from December 2026, and happy to talk consulting,
                collaboration or a quick question in the meantime.
              </p>
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
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Jane Doe" {...register("name")} />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@company.com" {...register("email")} />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" placeholder="Company name" {...register("company")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Let's collaborate" {...register("subject")} />
                  {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell me a bit about what you have in mind..." {...register("message")} />
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
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send message"
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
