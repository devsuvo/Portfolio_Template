import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { Stars, Star } from "../icons";
import { testimonials } from "@/data/site";

function ReviewCard({ review, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-[400px] w-full flex-col items-start justify-between rounded-xl bg-white p-5 transition-transform duration-500 hover:-translate-y-1">
        <div className="flex w-full items-center gap-3">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-background-4 p-1">
            <div className="relative size-12 overflow-hidden rounded">
              <Image src={review.avatar} alt={review.name} fill sizes="48px" className="object-cover" />
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-tagline-1 font-medium text-black">{review.name}</p>
            <p className="text-tagline-2 text-secondary/60">{review.role}</p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <Stars />
          <p className="text-tagline-1 text-background-14/60">“{review.quote}”</p>
        </div>
      </div>
    </Reveal>
  );
}

function HighlightCard() {
  const { highlight } = testimonials;
  const sizes = ["size-11", "size-[38px]", "size-8"];

  return (
    <Reveal delay={0.3}>
      <div className="flex h-[450px] w-full flex-col items-start justify-between rounded-xl bg-white p-5">
        <div className="flex w-full flex-col items-start gap-2.5 rounded-md bg-background-3 p-4">
          <div className="flex w-full items-center justify-between gap-3">
            <div className="isolate flex min-w-0 items-center">
              <div className="z-4 -mr-3 flex size-14 shrink-0 items-center justify-center rounded-lg bg-accent p-1 shadow-sm">
                <p className="text-tagline-3 font-medium text-black">{highlight.count}</p>
              </div>
              {highlight.avatars.map((src, i) => (
                <div
                  key={src}
                  className={`flex shrink-0 items-center justify-center rounded-lg bg-background-4 p-1 ${i < 2 ? "-mr-3" : ""}`}
                  style={{ zIndex: 3 - i }}
                >
                  <div className={`relative overflow-hidden rounded ${sizes[i]}`}>
                    <Image src={src} alt="Client avatar" fill sizes="44px" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 flex-col items-start gap-1">
              <div className="flex items-center gap-0.5 text-[#ffb400]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3" />
                ))}
              </div>
              <p className="text-tagline-2 text-secondary/60">{highlight.caption}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-black">
            <span className="text-heading-4">{highlight.rating}</span>
            <span className="text-tagline-1 text-secondary/60">/5</span>
          </p>
          <p className="text-tagline-2 text-secondary/60">Real rating</p>
        </div>

        <div className="w-full space-y-4">
          {highlight.quotes.map((q) => (
            <p key={q} className="text-tagline-1 text-background-14/60">
              “{q}”
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  const r = testimonials.reviews;

  return (
    <section id="testimonials" className="scroll-mt-28 py-18 md:py-28 xl:py-39">
      <div className="main-container">
        <div className="space-y-8 md:space-y-18">
          <SectionHeader {...testimonials} buttonVariant="secondary" />

          <div className="grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 flex flex-col gap-6 md:col-span-6 lg:col-span-4">
              <ReviewCard review={r[0]} delay={0.1} />
              <ReviewCard review={r[1]} delay={0.2} />
            </div>
            <div className="col-span-12 flex flex-col gap-6 md:col-span-6 lg:col-span-4">
              <ReviewCard review={r[2]} delay={0.2} />
              <HighlightCard />
              <ReviewCard review={r[3]} delay={0.4} />
            </div>
            <div className="col-span-12 flex flex-col gap-6 md:col-span-6 lg:col-span-4">
              <ReviewCard review={r[4]} delay={0.3} />
              <ReviewCard review={r[5]} delay={0.4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
