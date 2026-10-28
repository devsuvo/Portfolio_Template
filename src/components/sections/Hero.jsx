import Image from "next/image";
import Button from "../ui/Button";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";
import PartnerMark from "../ui/PartnerMark";
import { hero, partners } from "@/data/site";

// Decorative glyphs shown next to each wheel card title
const glyphs = ["✦", "✺", "❋", "✸", "✹", "❂", "✷", "✶"];

function LogoMarquee() {
  const row = (hidden) => (
    <div className="flex w-max shrink-0 items-center gap-x-10 pr-10" aria-hidden={hidden || undefined}>
      {partners.map((p) => (
        <PartnerMark key={p.name} name={p.name} shape={p.shape} />
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
      <span className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background-13 to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background-13 to-transparent" />
    </div>
  );
}

function CardWheel() {
  const step = 360 / hero.wheel.length;

  return (
    <div className="relative mt-10 h-[520px] w-full overflow-hidden md:h-[720px] xl:mt-4 xl:h-[780px]">
      <div className="hero-wheel animate-wheel [--card-h:324px] md:[--card-h:433px]">
        {hero.wheel.map((card, i) => (
          <div key={card.title} className="hero-wheel-card" style={{ "--angle": `${i * step}deg` }}>
            <div className="w-64 cursor-pointer space-y-6 bg-white p-4 md:w-88.5 md:space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="max-w-45 text-heading-6 font-medium text-secondary md:text-heading-5">{card.title}</h3>
                <span className="text-[36px] leading-none text-secondary md:text-[44px]" aria-hidden="true">
                  {glyphs[i % glyphs.length]}
                </span>
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-md md:h-81.25">
                <Image src={card.image} alt={card.title} fill sizes="(min-width: 768px) 330px, 240px" className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* edge fades */}
      <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/5 bg-linear-to-r from-background-13 to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/5 bg-linear-to-l from-background-13 to-transparent" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-background-13 to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-30 md:pt-35 lg:pt-48">
      <div className="main-container">
        <div className="flex w-full flex-col items-start justify-center gap-x-16 gap-y-10 lg:h-96 lg:flex-row lg:gap-y-0 xl:h-102.25 xl:gap-x-28">
          {/* left: headline */}
          <div className="flex h-full w-full flex-col items-center justify-between gap-y-10 lg:w-[70%] lg:items-start lg:gap-y-0">
            <div className="space-y-4 text-center md:text-left">
              <Reveal as="h1" delay={0.1}>
                {hero.title}
              </Reveal>
              <Reveal as="p" delay={0.2} className="max-w-[640px]">
                {hero.text}
              </Reveal>
            </div>
            <Reveal delay={0.3} className="flex w-full flex-col items-center justify-center gap-x-8 gap-y-4 md:flex-row md:gap-y-0 lg:items-start lg:justify-start">
              <Button href={hero.primary.href} className="w-[80%] md:w-auto">
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="secondary" className="w-[80%] md:w-auto">
                {hero.secondary.label}
              </Button>
            </Reveal>
          </div>

          {/* right: social proof */}
          <Reveal delay={0.4} className="h-full w-full lg:w-[30%]">
            <div className="flex h-full w-full flex-col items-center justify-between gap-y-15 md:gap-y-10 lg:items-start lg:gap-y-0">
              <div className="flex w-full flex-col items-center gap-x-20 gap-y-8 max-md:justify-between md:flex-row md:gap-y-0 lg:flex-col lg:gap-y-4">
                <div className="relative flex w-full shrink-0 items-center gap-x-3 pb-8 md:pb-0 lg:pb-8">
                  <div className="flex -space-x-6">
                    {hero.avatars.map((src, i) => (
                      <div key={src} className="relative size-14 overflow-hidden rounded-full ring-2 ring-white">
                        <Image src={src} alt={`Happy client ${i + 1}`} fill sizes="56px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="max-w-41.75 font-medium text-black">
                    <Counter value={hero.teamsCount} />+ teams shipping faster this week.
                  </p>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-stroke-3 md:hidden lg:block" />
                </div>

                <div className="flex w-full items-center justify-center max-md:gap-x-5 lg:justify-between">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="space-y-1 lg:max-w-39">
                      <p className="text-heading-4 text-black">
                        <Counter value={stat.value} />
                        {stat.suffix}
                      </p>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <LogoMarquee />
            </div>
          </Reveal>
        </div>
      </div>

      <CardWheel />
    </section>
  );
}
