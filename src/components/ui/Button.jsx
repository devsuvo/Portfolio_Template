import Link from "next/link";
import { ArrowUpRight } from "../icons";

/**
 * Pill button with a rolling label and rotating arrow on hover.
 * variant: "primary" (purple) | "secondary" (light)
 * size: "lg" (h-16) | "md" (h-14)
 */
export default function Button({ href = "#", children, variant = "primary", size = "lg", className = "" }) {
  const primary = variant === "primary";
  const height = size === "lg" ? "h-16" : "h-14";

  return (
    <Link
      href={href}
      className={`group inline-flex ${height} rounded-full border border-stroke-1 p-1.5 text-tagline-1 transition-transform duration-400 ease-bouncy active:scale-[0.98] ${
        primary ? "text-accent" : "text-secondary"
      } ${className}`}
    >
      <span
        className={`flex h-full w-full items-center justify-between gap-x-4 rounded-full py-1.5 pr-1.5 pl-6 ${
          primary ? "bg-primary-500" : "border border-stroke-1 bg-accent/60"
        }`}
      >
        {/* rolling label */}
        <span className="relative inline-block overflow-hidden leading-none">
          <span className="block py-0.5 text-nowrap transition-transform duration-500 ease-bouncy group-hover:-translate-y-full">
            {children}
          </span>
          <span
            aria-hidden="true"
            className="absolute top-full left-0 block py-0.5 text-nowrap transition-transform duration-500 ease-bouncy group-hover:-translate-y-full"
          >
            {children}
          </span>
        </span>
        <span className="flex h-10 w-13.5 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-white to-background-4 text-black shadow-[0_8px_12px_0_rgba(0,0,0,0.16)]">
          <ArrowUpRight className="size-6 transition-transform duration-400 ease-bouncy group-hover:rotate-45" />
        </span>
      </span>
    </Link>
  );
}
