import Badge from "./Badge";
import Button from "./Button";
import Reveal from "./Reveal";

/** Centered badge + title + text + button block used by most sections. */
export default function SectionHeader({ badge, title, text, button, buttonVariant = "primary", textWidth = "max-w-[600px]" }) {
  return (
    <div className="space-y-7 md:space-y-14">
      <div className="space-y-5 text-center">
        <Reveal delay={0.1}>
          <Badge>{badge}</Badge>
        </Reveal>
        <div className="space-y-3">
          <Reveal as="h2" delay={0.2} className="mx-auto max-w-[760px]">
            {title}
          </Reveal>
          <Reveal as="p" delay={0.3} className={`mx-auto ${textWidth}`}>
            {text}
          </Reveal>
        </div>
      </div>
      {button && (
        <Reveal delay={0.4} className="flex shrink-0 items-center justify-center">
          <Button href={button.href} variant={buttonVariant} className="w-[80%] md:w-auto">
            {button.label}
          </Button>
        </Reveal>
      )}
    </div>
  );
}
