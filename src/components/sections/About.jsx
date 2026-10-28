import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";
import { Stars } from "../icons";
import { about } from "@/data/site";

function StatCard({ stat, delay }) {
  return (
    <Reveal delay={delay} className="col-span-12 md:col-span-4">
      <div className="flex h-57.5 flex-col items-start justify-between rounded-xl bg-background-1 p-6">
        <h3 className="font-medium">
          <Counter value={stat.value} />
          {stat.suffix}
        </h3>
        <p>{stat.label}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  const [partners, years, awards] = about.stats;

  return (
    <section id="about" className="scroll-mt-28 pb-18 md:pb-28 xl:pb-39">
      <div className="main-container">
        <div className="space-y-10 xl:space-y-18">
          <div className="space-y-10 lg:space-y-15 xl:space-y-28">
            <Reveal delay={0.1}>
              <Badge>{about.badge}</Badge>
            </Reveal>

            <div className="flex flex-col items-center justify-center gap-x-18 gap-y-5 lg:flex-row lg:items-start lg:gap-y-0">
              <Reveal as="h2" delay={0.2} className="text-center lg:w-1/2 lg:text-left">
                {about.title}
              </Reveal>
              <div className="flex flex-col items-center gap-y-4 lg:w-1/2 lg:items-end xl:gap-y-14">
                <Reveal as="p" delay={0.3} className="w-full max-w-123.5 text-center lg:text-right">
                  {about.text}
                </Reveal>
                <Reveal delay={0.4}>
                  <Button href={about.button.href} variant="secondary">
                    {about.button.label}
                  </Button>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 items-start gap-y-5 md:gap-4">
            <StatCard stat={partners} delay={0.1} />
            <StatCard stat={years} delay={0.2} />

            <Reveal delay={0.3} className="col-span-12 row-span-2 h-full min-h-[300px] md:col-span-4">
              <div className="relative size-full overflow-hidden rounded-xl">
                <Image
                  src={about.image}
                  alt="The Suvo Dev team collaborating"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>

            <StatCard stat={awards} delay={0.2} />

            <Reveal delay={0.3} className="col-span-12 md:col-span-4">
              <div className="flex h-57.5 flex-col items-center justify-center gap-y-6 rounded-xl bg-background-1 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-md bg-[#00b67a] text-white">★</span>
                  <span className="text-heading-5 font-semibold text-secondary">Client Reviews</span>
                </div>
                <Stars className="size-6 text-[#00b67a]" />
                <p className="text-heading-6 text-secondary">{about.rating}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
