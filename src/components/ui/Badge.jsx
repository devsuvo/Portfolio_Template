import { Star } from "../icons";

/** Section label: ── ★ ABOUT US ── */
export default function Badge({ children, align = "center" }) {
  const justify =
    align === "left" ? "justify-center lg:justify-start" : "justify-center";

  return (
    <div
      className={`relative flex items-center gap-x-1 ${justify} before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']`}
    >
      <Star className="size-4.25 shrink-0 text-primary-500" />
      <span className="text-tagline-2 font-normal text-secondary uppercase">{children}</span>
    </div>
  );
}
