import Hero from "@/components/sections/Hero";
import CircleText from "@/components/sections/CircleText";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import Team from "@/components/sections/Team";
import FunFacts from "@/components/sections/FunFacts";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CircleText />
      <About />
      <Services />
      <Process />
      <Projects />
      <Clients />
      <Team />
      <FunFacts />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
