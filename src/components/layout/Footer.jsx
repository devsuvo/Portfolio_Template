import { Fragment } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { SocialIcon } from "../icons";
import { brand, footer } from "@/data/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative z-0 overflow-hidden bg-background-1">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-16 pt-24 pb-12 xl:pt-39">
          <div className="col-span-12 xl:col-span-4">
            <div className="max-w-[306px]">
              <Logo />
              <p className="mt-4 mb-7 text-tagline-1 text-background-14/60">{brand.description}</p>
              <div className="flex items-center gap-3">
                {footer.socials.map((social, i) => (
                  <Fragment key={social.label}>
                    {i > 0 && <span className="h-6 w-px bg-stroke-3" />}
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-secondary transition-all duration-500 hover:-translate-y-1 hover:text-primary-500"
                    >
                      <span className="sr-only">{social.label}</span>
                      <SocialIcon name={social.icon} />
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-y-8 xl:col-span-8">
            {footer.columns.map((col) => (
              <div key={col.title} className="col-span-12 md:col-span-4">
                <div className="space-y-8">
                  <p className="text-tagline-1 font-medium text-secondary sm:text-heading-6">{col.title}</p>
                  <ul className="space-y-5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative pt-[26px] pb-[42px] text-center">
          <span className="absolute inset-x-0 top-0 h-px bg-stroke-3" />
          <p className="text-tagline-1 font-medium text-secondary">
            Copyright ©{year} {brand.name}. {brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
