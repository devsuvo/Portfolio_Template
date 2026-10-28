"use client";

import { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { Plus } from "../icons";
import { faq } from "@/data/site";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28 py-18 md:py-28 xl:py-39">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-y-10 lg:gap-x-10 xl:gap-x-18">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-8">
              <div className="space-y-5">
                <Reveal delay={0.1}>
                  <Badge align="left">{faq.badge}</Badge>
                </Reveal>
                <div className="space-y-3 text-center lg:text-left">
                  <Reveal as="h2" delay={0.2}>
                    {faq.title}
                  </Reveal>
                  <Reveal as="p" delay={0.3} className="max-w-[600px] max-lg:mx-auto">
                    {faq.text}
                  </Reveal>
                </div>
              </div>
              <Reveal delay={0.4} className="flex justify-center lg:justify-start">
                <Button href={faq.button.href} variant="secondary" className="w-[80%] md:w-auto">
                  {faq.button.label}
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              const last = i === faq.items.length - 1;
              return (
                <Reveal key={item.q} delay={0.1 * (i + 1)} className={last ? "" : "border-b border-stroke-3"}>
                  <h3 className="text-tagline-new font-medium md:text-heading-6">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className={`flex w-full cursor-pointer items-start justify-between gap-9 pt-6 text-left text-black transition-all duration-500 ease-out ${
                        isOpen ? "pb-3" : "pb-6"
                      }`}
                    >
                      {item.q}
                      <span
                        className={`flex size-7 shrink-0 items-center justify-center rounded border transition-all duration-500 ${
                          isOpen ? "border-transparent bg-primary-500 text-white" : "border-stroke-3 text-secondary"
                        }`}
                      >
                        <Plus className={`size-4 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[540px] pb-6 text-black/60">{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
