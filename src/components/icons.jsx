// Small inline SVG icon set used across the site.

export function ArrowUpRight({ className = "size-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 17 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
    </svg>
  );
}

export function Stars({ count = 5, className = "size-4 text-[#ffb400]" }) {
  return (
    <span className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={className} />
      ))}
    </span>
  );
}

export function Check({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="9" className="fill-primary-50" />
      <path d="M6.5 10.2l2.3 2.3 4.7-4.9" stroke="#864ffe" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDown({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
    </svg>
  );
}

export function Close({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}

export function XLogo({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* Mega-menu icons */
const menuPaths = {
  login: "M10 3h3a1 1 0 011 1v8a1 1 0 01-1 1h-3M7 11l3-3-3-3M10 8H2",
  user: "M8 8a3 3 0 100-6 3 3 0 000 6zM2.5 14a5.5 5.5 0 0111 0",
  team: "M6 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM11 7a2 2 0 100-4M1.5 13.5a4.5 4.5 0 019 0M11.5 9.5a3.5 3.5 0 013 4",
  tag: "M2 2h6l6 6-6 6-6-6V2zM5 5h.01",
  help: "M8 14.5A6.5 6.5 0 108 1.5a6.5 6.5 0 000 13zM6.2 6a1.9 1.9 0 013.6.7c0 1.3-1.8 1.6-1.8 2.8M8 11.5h.01",
  flow: "M2 4h4v4H2zM10 8h4v4h-4zM6 6h2a2 2 0 012 2",
  spark: "M8 1.5l1.6 4.4 4.4 1.6-4.4 1.6L8 13.5l-1.6-4.4L2 7.5l4.4-1.6z",
  plug: "M6 1.5v3M10 1.5v3M4 4.5h8v3a4 4 0 01-8 0v-3zM8 11.5v3",
  shield: "M8 1.5l5.5 2v4c0 3.5-2.4 6-5.5 7-3.1-1-5.5-3.5-5.5-7v-4z",
  lock: "M4 7V5a4 4 0 018 0v2M3 7h10v7H3z",
  doc: "M4 1.5h5.5L13 5v9.5H4zM9 1.5V5h4M6 8.5h4M6 11h4",
};

export function MenuIcon({ name, className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={menuPaths[name] ?? menuPaths.spark} />
    </svg>
  );
}

/* Social icons */
export function SocialIcon({ name, className = "size-6" }) {
  const common = { className, fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": true };
  switch (name) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M13.5 21v-7.5H16l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M6.9 8.8H3.7V20h3.2zM5.3 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.3 13.6c0-3-1.6-5-4.3-5-1.4 0-2.4.8-2.8 1.5V8.8H10V20h3.2v-5.6c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h3.2z" />
        </svg>
      );
    case "dribbble":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 3.7c3 4 5.3 9.4 6.5 16.6M3.1 10.5c5.3.2 10.2-.8 14.3-3.9M5.3 18.2c3.4-4 8.4-5.8 15.6-4.4" />
        </svg>
      );
    case "behance":
      return (
        <svg {...common}>
          <path d="M9 11.3c.9-.4 1.5-1.2 1.5-2.4C10.5 6.7 9 6 7 6H2v12h5.2c2.2 0 4-1 4-3.4 0-1.5-.8-2.9-2.2-3.3zM4.5 8h2.2c.8 0 1.5.2 1.5 1.1 0 .9-.6 1.2-1.4 1.2H4.5zm2.4 8H4.5v-3.4H7c1 0 1.7.4 1.7 1.7 0 1.3-.9 1.7-1.8 1.7zM15 7h5v1.3h-5zM17.6 9.5c-2.5 0-4.1 1.8-4.1 4.3 0 2.6 1.5 4.3 4.1 4.3 1.9 0 3.2-.9 3.8-2.8h-2c-.2.6-.9 1-1.7 1-1.2 0-1.9-.7-2-2h5.8c.1-2.8-1.3-4.8-3.9-4.8zm-1.9 3.4c.1-1 .8-1.7 1.8-1.7 1.1 0 1.6.6 1.7 1.7z" />
        </svg>
      );
    default:
      return null;
  }
}
