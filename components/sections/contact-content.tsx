"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { offices, serviceOptions } from "@/lib/site-data";

const contactCards = [
  { label: "Email", value: "connect@appxdeploy.com", href: "mailto:connect@appxdeploy.com", icon: Mail },
  { label: "Response", value: "Within 1 business day", icon: Send },
];

export function ContactContent() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const selectedService = serviceOptions.includes(requestedService) ? requestedService : "";
  const [showSuccess, setShowSuccess] = React.useState(false);
  const successTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setShowSuccess(true);

    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
    }

    successTimerRef.current = setTimeout(() => {
      setShowSuccess(false);
    }, 6000);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you want to build"
              description="Share your goals and preferred service. We will respond with a practical next step for design, development, cloud, SEO, ads, or support."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Card className="p-6 sm:p-8">
                <form className="grid gap-5" aria-label="Contact form" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name">
                      <Input name="name" placeholder="Your name" autoComplete="name" required />
                    </Field>
                    <Field label="Email">
                      <Input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                    </Field>
                  </div>
                  <Field label="Service">
                    <Select name="service" defaultValue={selectedService} required>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Message">
                    <Textarea name="message" placeholder="Tell us about your project, timeline, and goals." required />
                  </Field>
                  {showSuccess ? (
                    <div
                      role="status"
                      aria-live="polite"
                      className="flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm font-medium leading-6 text-emerald-700 dark:text-emerald-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <span>Thank you, our executive will contact you.</span>
                    </div>
                  ) : null}
                  <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-fit">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </Reveal>

            <div className="grid content-start gap-5">
              <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <StaggerItem key={card.label}>
                      <Card className="p-6">
                        <Icon className="h-6 w-6 text-cyan-500" />
                        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{card.label}</p>
                        {"href" in card ? (
                          <a
                            href={card.href}
                            className="mt-1 block font-semibold text-slate-950 transition hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-semibold text-slate-950 dark:text-white">{card.value}</p>
                        )}
                      </Card>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Office locations"
              title="Built in India, available remotely worldwide"
              description="Connect with AppxDeploy through our India office locations or work with us remotely from anywhere."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <StaggerItem key={office.city}>
                <Card className="h-full p-7">
                  <MapPin className="h-7 w-7 text-cyan-500" />
                  <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{office.city}</h3>
                  <address className="mt-4 not-italic leading-7 text-slate-600 dark:text-slate-400">
                    {office.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      {label}
      {children}
    </label>
  );
}
