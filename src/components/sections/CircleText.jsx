"use client";

import { useRef } from "react";
import Link from "next/link";
import { LogoMark } from "../ui/Logo";
import Reveal from "../ui/Reveal";

const TEXT = "DISCOVER MORE WORK FROM SUVO DEV • DISCOVER MORE WORK FROM SUVO DEV • ";

/** Rotating text ring around the logo. The logo follows the cursor a little (magnetic effect). */
export default function CircleText() {
  const logoRef = useRef(null);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    if (logoRef.current) logoRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (logoRef.current) logoRef.current.style.transform = "translate(0, 0)";
  };

  return (
    <Reveal as="section" delay={0.1} className="pb-14">
      <div className="flex items-center justify-center">
        <Link
          href="/#projects"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative block size-40 rounded-full bg-white"
          aria-label="Discover more work from Suvo Dev"
        >
          <svg viewBox="0 0 160 160" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
            <defs>
              <path id="circle-text-path" d="M80,80 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0" />
            </defs>
            <text className="fill-secondary text-[9.6px] tracking-[0.18em] uppercase">
              <textPath href="#circle-text-path">{TEXT}</textPath>
            </text>
          </svg>
          <span
            ref={logoRef}
            className="absolute top-1/2 left-1/2 -mt-7 -ml-7 block size-14 transition-transform duration-300 ease-out"
          >
            <LogoMark className="size-14" />
          </span>
        </Link>
      </div>
    </Reveal>
  );
}
