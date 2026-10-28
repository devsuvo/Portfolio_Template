import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { ArrowRight, Check } from "../icons";
import { services } from "@/data/site";

function ServiceCard({ item, index }) {
  const number = `(${String(index + 1).padStart(2, "0")})`;

  return (
    <div className="flip-card h-[500px]" tabIndex={0}>
      <div className="flip-inner relative h-full w-full">
        {/* front */}
        <div className="flip-face absolute inset-0 flex flex-col">
          <div className="space-y-6 rounded-xl rounded-b-none border border-b-0 border-stroke-11/25 bg-white p-6">
            <span className="text-tagline-1 text-background-14/60">{number}</span>
            <div className="space-y-1">
              <h3 className="text-heading-5 text-black">{item.title}</h3>
              <p>{item.short}</p>
            </div>
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-b-xl">
            <Image src={item.image} alt={item.title} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>

        {/* back */}
        <div className="flip-face flip-back absolute inset-0 flex flex-col rounded-xl border border-stroke-11/25 bg-white p-6">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-tagline-1 text-background-14/60">{number}</span>
              <div className="space-y-1">
                <h3 className="text-heading-5 text-black">{item.title}</h3>
                <p>{item.long}</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {item.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-tagline-2 text-background-14 sm:text-tagline-1">
                  <Check />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 border-t border-stroke-11/25 pt-6">
            <Link
              href="/contact"
              className="group/link flex items-center justify-between rounded-xl p-3 text-tagline-1 text-black transition-colors hover:bg-primary-50 hover:text-primary-600"
            >
              Explore service
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 space-y-10 bg-white py-18 md:space-y-18 md:py-28 xl:py-39">
      <div className="main-container">
        <SectionHeader {...services} textWidth="max-w-175" />
      </div>
      <div className="main-container">
        <div className="grid grid-cols-12 gap-6">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={0.1 * (i + 1)} className="col-span-12 sm:col-span-6 xl:col-span-3">
              <ServiceCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
