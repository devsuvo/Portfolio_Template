"use client";

import { useState } from "react";
import { ArrowUpRight } from "../icons";
import { brand } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-stroke-1 bg-background-1 px-4 py-3.5 text-tagline-1 text-secondary outline-none transition-colors placeholder:text-secondary/40 focus:border-primary-500";

/** No backend needed: on submit it opens the visitor's email app with the message filled in. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `New project inquiry from ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-white p-6 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-tagline-2 font-medium text-secondary">Your name</span>
          <input name="name" required placeholder="John Doe" className={inputClass} />
        </label>
        <label className="space-y-2">
          <span className="block text-tagline-2 font-medium text-secondary">Email address</span>
          <input name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="block text-tagline-2 font-medium text-secondary">Service you need</span>
        <select name="service" className={inputClass} defaultValue="UI/UX Design">
          <option>UI/UX Design</option>
          <option>Web Development</option>
          <option>Brand Strategy</option>
          <option>Digital Marketing</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block space-y-2">
        <span className="block text-tagline-2 font-medium text-secondary">Project details</span>
        <textarea name="message" required rows={5} placeholder="Tell us about your goals, timeline and budget…" className={inputClass} />
      </label>
      <button
        type="submit"
        className="group inline-flex h-14 cursor-pointer items-center gap-4 rounded-full bg-primary-500 py-1.5 pr-1.5 pl-6 text-tagline-1 text-accent transition-transform duration-400 ease-bouncy active:scale-[0.98]"
      >
        Send message
        <span className="flex h-10 w-13.5 items-center justify-center rounded-full bg-linear-to-b from-white to-background-4 text-black shadow-[0_8px_12px_0_rgba(0,0,0,0.16)]">
          <ArrowUpRight className="size-6 transition-transform duration-400 ease-bouncy group-hover:rotate-45" />
        </span>
      </button>
      {sent && (
        <p className="text-tagline-2 text-primary-600">
          Thanks! Your email app should open now. If it doesn’t, write to us at {brand.email}.
        </p>
      )}
    </form>
  );
}
