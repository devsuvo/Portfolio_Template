import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { brand } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Tell Suvo Dev about your project and we’ll get back to you within one business day.",
};

const details = [
  { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { label: "Phone", value: brand.phone, href: `tel:${brand.phone.replace(/[^+\d]/g, "")}` },
  { label: "Office", value: brand.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Let’s build something great together"
        text="Tell us about your goals and we’ll get back to you within one business day with next steps."
        showActions={false}
      />

      <section className="pb-18 md:pb-28 xl:pb-39">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-6">
            <Reveal delay={0.1} className="col-span-12 space-y-4 lg:col-span-4">
              {details.map((d) => (
                <div key={d.label} className="space-y-1 rounded-2xl bg-white p-6">
                  <p className="text-tagline-2">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="text-heading-6 text-secondary transition-colors hover:text-primary-500">
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-heading-6 text-secondary">{d.value}</p>
                  )}
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.2} className="col-span-12 lg:col-span-8">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
