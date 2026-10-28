import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import PartnerMark from "../ui/PartnerMark";
import { clients } from "@/data/site";

export default function Clients() {
  return (
    <section className="py-18 md:py-28 xl:py-39">
      <div className="main-container">
        <div className="space-y-8 md:space-y-18">
          <SectionHeader {...clients} />

          <div className="-mb-6 w-full columns-1 gap-6 sm:columns-2 xl:columns-4">
            {clients.tiles.map((tile, i) =>
              tile.type === "stat" ? (
                <Reveal key={tile.brand} delay={0.05 * (i + 1)} className="mb-6 break-inside-avoid">
                  <div className="flex h-80 w-full flex-col items-start justify-between overflow-hidden rounded-xl bg-white p-8 transition-transform duration-500 hover:-translate-y-1">
                    <PartnerMark name={tile.brand} shape={tile.shape} tone="dark" />
                    <div className="space-y-1">
                      <p className="text-heading-4 text-black">
                        <Counter value={tile.value} />
                        {tile.suffix}
                      </p>
                      <p className="text-tagline-1 text-background-14/60">{tile.label}</p>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal key={tile.brand} delay={0.05 * (i + 1)} className="mb-6 break-inside-avoid">
                  <div className="flex h-[166px] w-full items-center justify-center overflow-hidden rounded-xl bg-white p-8 transition-transform duration-500 hover:-translate-y-1">
                    <PartnerMark name={tile.brand} shape={tile.shape} tone="dark" />
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
