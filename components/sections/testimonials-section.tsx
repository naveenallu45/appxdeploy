import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by teams that care about speed, polish, and reliability"
            description="A premium product experience is not just how it looks. It is how calmly it ships."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.role}>
                <Card className="h-full p-7">
                  <Quote className="h-8 w-8 text-cyan-500" />
                  <div className="mt-6 flex gap-1 text-amber-400" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-300">“{testimonial.quote}”</p>
                  <div className="mt-8 border-t border-slate-200 pt-5 dark:border-white/10">
                    <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
