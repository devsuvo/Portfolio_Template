import Link from "next/link";

export function LogoMark({ className = "size-11" }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sd-logo-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a47bff" />
          <stop offset="1" stopColor="#6a2df0" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="22" fill="url(#sd-logo-grad)" />
      {/* Stylised "S" built from two arcs */}
      <path
        d="M28.5 15.5c-1.4-1.9-3.6-3-6.3-3-3.9 0-6.7 2.3-6.7 5.4 0 3.4 3 4.5 6.6 5.3 3.4.8 5.6 1.6 5.6 4 0 2-2.1 3.6-5.3 3.6-2.6 0-4.8-1.1-6.2-3.1"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ className = "", showText = true }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Suvo Dev home">
      <LogoMark />
      {showText && (
        <span className="text-heading-6 font-semibold tracking-tight text-secondary">
          Suvo<span className="text-primary-500"> Dev</span>
        </span>
      )}
    </Link>
  );
}
