"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { workProcess } from "@/data/site";

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="scroll-mt-28 bg-white py-18 md:py-28 xl:py-39">
      <div className="main-container">
        <div className="space-y-10 xl:space-y-18">
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <Badge>{workProcess.badge}</Badge>
            </Reveal>
            <div className="flex flex-col items-center gap-y-5 lg:flex-row lg:items-start lg:gap-x-14 lg:gap-y-0">
              <Reveal as="h2" delay={0.2} className="max-w-172.75 text-center lg:text-left">
                {workProcess.title}
              </Reveal>
              <div className="flex max-w-135.75 flex-col items-center gap-y-8 lg:items-start">
                <Reveal as="p" delay={0.3} className="w-full text-center lg:text-left">
                  {workProcess.text}
                </Reveal>
                <Reveal delay={0.4}>
                  <Button href={workProcess.button.href}>{workProcess.button.label}</Button>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:items-center lg:justify-center">
            {workProcess.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <div
                  key={step.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className={`group relative h-125 w-full overflow-hidden rounded-xl border border-stroke-11/25 p-6 transition-all duration-800 ease-out xl:h-135 ${
                    isActive ? "lg:w-[39.53%]" : "lg:w-[28.37%]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-900 ease-out ${
                      isActive ? "opacity-100" : "opacity-100 lg:opacity-0"
                    }`}
                  >
                    <Image src={step.image} alt={step.title} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                    <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/40" />
                  </div>

                  <div className="relative z-30 space-y-3">
                    <p className={`transition-colors duration-500 ${isActive ? "text-accent" : "text-accent lg:text-background-14/60"}`}>
                      {step.label}
                    </p>
                    <h3
                      className={`w-62.5 text-heading-6 font-medium transition-colors duration-500 md:text-heading-5 ${
                        isActive ? "text-accent" : "text-accent lg:text-secondary"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <span
                    className={`absolute right-6 bottom-6 z-30 text-heading-3 font-medium transition-colors duration-500 lg:text-heading-2 ${
                      isActive ? "text-accent" : "text-accent lg:text-secondary"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
