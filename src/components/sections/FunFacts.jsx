import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import { funFacts } from "@/data/site";

const heights = ["h-[186px]", "h-[452px]", "h-[251px]", "h-[373px]"];

export default function FunFacts() {
  return (
    <section className="py-18 md:py-28 xl:py-39">
      <div className="main-container">
        <div className="space-y-8 md:space-y-18">
          <SectionHeader {...funFacts} textWidth="max-w-[755px]" />

          <div className="grid grid-cols-12 gap-4 xl:items-end">
            {funFacts.items.map((item, i) => {
              const hasImage = Boolean(item.image);
              return (
                <Reveal key={item.label} delay={0.1 * (i + 1)} className="col-span-12 md:col-span-6 xl:col-span-3">
                  <div
                    className={`relative flex flex-col items-start justify-between overflow-hidden rounded-xl p-8 ${heights[i]} ${
                      hasImage ? "" : "border border-stroke-3 bg-white"
                    }`}
                  >
                    {hasImage && (
                      <>
                        <Image src={item.image} alt="" fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                        {item.dark && <span className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/60" />}
                      </>
                    )}
                    <p className={`relative z-1 text-heading-4 ${item.dark ? "text-accent" : "text-black"}`}>
                      <Counter value={item.value} />
                      {item.suffix}
                    </p>
                    <p className={`relative z-1 w-full text-right text-tagline-1 ${item.dark ? "text-white/80" : "text-background-14/60"}`}>
                      {item.label}
                    </p>
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
