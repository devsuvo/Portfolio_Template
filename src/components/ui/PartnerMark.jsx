// Simple wordmark logos for (fictional) partner brands.

const shapes = {
  circle: <circle cx="12" cy="12" r="9" />,
  triangle: <path d="M12 3l9.5 17h-19z" />,
  wave: <path d="M2 14c3-6 6-6 10 0s7 6 10 0v7H2z" />,
  arc: <path d="M3 20a9 9 0 0118 0h-5a4 4 0 00-8 0z" />,
  square: <rect x="3.5" y="3.5" width="17" height="17" rx="5" />,
  grid: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="4" />
      <rect x="3" y="13" width="8" height="8" rx="4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </>
  ),
  star: <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />,
  diamond: <path d="M12 2l10 10-10 10L2 12z" />,
};

export default function PartnerMark({ name, shape = "circle", className = "", tone = "metal" }) {
  const color = tone === "metal" ? "text-[#9aa3b2]" : "text-secondary";
  return (
    <span className={`inline-flex items-center gap-2 ${color} ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0" aria-hidden="true">
        {shapes[shape]}
      </svg>
      <span className="text-heading-6 leading-none font-semibold tracking-tight">{name}</span>
    </span>
  );
}
