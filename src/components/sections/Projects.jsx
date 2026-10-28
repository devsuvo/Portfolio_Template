import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { ArrowUpRight } from "../icons";
import { projects } from "@/data/site";

// Card heights for the staggered (masonry) layout, in display order
const heights = [
  "h-[370px] xl:h-[400px]",
  "h-[450px] xl:h-[550px]",
  "h-[280px] xl:h-[300px]",
  "h-[450px] xl:h-[550px]",
  "h-[280px] xl:h-[400px]",
  "h-[370px] xl:h-[650px]",
];

function ProjectCard({ project, height }) {
  return (
    <Link href="/projects" className={`group relative block w-full overflow-hidden rounded-xl ${height}`}>
      <Image
        src={project.image}
        alt={`${project.title} project`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute top-5 right-5 z-10 flex size-11 scale-75 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 ease-bouncy group-hover:scale-100 group-hover:opacity-100">
        <ArrowUpRight className="size-5" />
      </span>
      <span className="absolute bottom-6 left-6 z-10 flex flex-wrap items-center gap-x-4 gap-y-1 pr-6">
        <span className="text-heading-5 font-medium text-white">{project.title}</span>
        <span className="text-tagline-2 text-white/80">{project.desc}</span>
      </span>
    </Link>
  );
}

export default function Projects() {
  // split the six projects into three columns: [0,3] [1,4] [2,5]
  const columns = [0, 1, 2].map((col) => projects.items.map((p, i) => ({ p, i })).filter(({ i }) => i % 3 === col));

  return (
    <section id="projects" className="scroll-mt-28 py-18 md:py-28 xl:py-39">
      <div className="main-container">
        <div className="space-y-8 md:space-y-18">
          <SectionHeader {...projects} buttonVariant="secondary" textWidth="max-w-[755px]" />

          {/* mobile / tablet: simple grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
            {projects.items.map((project, i) => (
              <Reveal key={project.title} delay={0.1 * ((i % 2) + 1)}>
                <ProjectCard project={project} height="h-[380px]" />
              </Reveal>
            ))}
          </div>

          {/* desktop: staggered columns */}
          <div className="hidden grid-cols-3 items-start gap-6 lg:grid">
            {columns.map((items, col) => (
              <div key={col} className="space-y-6">
                {items.map(({ p, i }) => (
                  <Reveal key={p.title} delay={0.1 * (col + 1)}>
                    <ProjectCard project={p} height={heights[i]} />
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
