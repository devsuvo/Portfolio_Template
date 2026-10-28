import SectionHeader from "../ui/SectionHeader";
import { cta } from "@/data/site";

export default function Cta() {
  return (
    <section className="py-18 lg:py-28">
      <div className="main-container">
        <SectionHeader {...cta} />
      </div>
    </section>
  );
}
