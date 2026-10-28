import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

/** Simple title block for inner pages. */
export default function PageHero({ badge, title, text, showActions = true }) {
  return (
    <section className="pt-36 pb-18 md:pt-44 md:pb-28">
      <div className="main-container">
        <div className="mx-auto max-w-[760px] space-y-6 text-center">
          <Reveal delay={0.1}>
            <Badge>{badge}</Badge>
          </Reveal>
          <Reveal as="h1" delay={0.2}>
            {title}
          </Reveal>
          <Reveal as="p" delay={0.3} className="mx-auto max-w-[600px]">
            {text}
          </Reveal>
          {showActions && (
            <Reveal delay={0.4} className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button href="/contact">Start a project</Button>
              <Button href="/" variant="secondary">
                Back to home
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
