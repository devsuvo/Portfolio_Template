import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { XLogo } from "../icons";
import { team } from "@/data/site";

// Scattered positions for the desktop layout (one per member)
const positions = [
  "z-2 left-[3%] top-[84px] xl:left-0",
  "z-1 left-[20%] top-[50%] xl:left-[22%] xl:top-[31%]",
  "z-1 left-[35%] top-0 xl:left-[43%]",
  "z-1 left-[47%] bottom-0 xl:left-[56%]",
  "z-1 right-[3%] top-[40%] -translate-y-1/2 xl:right-0 xl:top-[50%]",
];

function MemberCard({ member, fixedSize = false }) {
  return (
    <div
      className={`space-y-5 rounded-xl bg-white px-2 pt-2 pb-6 transition-transform duration-500 hover:-translate-y-2 ${
        fixedSize ? "h-[414px] w-[330px]" : "w-full max-w-[330px]"
      }`}
    >
      <div className="relative h-[310px] w-full overflow-hidden rounded-lg">
        <Image src={member.image} alt={member.name} fill sizes="330px" className="object-cover" />
      </div>
      <div className="space-y-1 px-3">
        <div className="flex items-center justify-between">
          <h3 className="text-heading-6">{member.name}</h3>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full bg-background-3 text-secondary transition-colors hover:bg-primary-500 hover:text-white"
          >
            <span className="sr-only">{member.name} on X</span>
            <XLogo />
          </Link>
        </div>
        <p>{member.role}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="scroll-mt-28 py-18 md:py-28 xl:py-39">
      <div className="main-container">
        <div className="space-y-8 md:space-y-18">
          <SectionHeader {...team} buttonVariant="secondary" />

          {/* desktop: scattered cards */}
          <div className="relative hidden h-[850px] overflow-hidden lg:block xl:h-[670px]">
            {team.members.map((member, i) => (
              <div key={member.name} className={`absolute hover:z-10 ${positions[i]}`}>
                <Reveal delay={0.1 * (i + 1)}>
                  <MemberCard member={member} fixedSize />
                </Reveal>
              </div>
            ))}
          </div>

          {/* mobile / tablet grid */}
          <div className="grid grid-cols-12 justify-items-center gap-y-6 md:gap-6 lg:hidden">
            {team.members.map((member, i) => (
              <Reveal
                key={member.name}
                delay={0.1 * ((i % 2) + 1)}
                className={`col-span-12 flex w-full justify-center md:col-span-6 ${i === 4 ? "md:col-start-4" : ""}`}
              >
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
