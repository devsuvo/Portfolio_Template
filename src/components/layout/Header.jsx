"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo, { LogoMark } from "../ui/Logo";
import Button from "../ui/Button";
import { ChevronDown, Close, MenuIcon, ArrowRight } from "../icons";
import { navLinks, megaMenu } from "@/data/site";

const allPages = [...megaMenu.columnOne, ...megaMenu.columnTwo];

function MegaMenuItem({ item }) {
  return (
    <li>
      <Link href={item.href} className="group relative flex items-start gap-2.5 rounded-[10px] p-3">
        <span className="absolute inset-0 z-0 rounded-[10px] bg-background-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border border-stroke-1 text-secondary">
          <MenuIcon name={item.icon} />
        </span>
        <span className="relative z-10 space-y-0.5">
          <span className="block text-tagline-1 text-secondary">{item.label}</span>
          <span className="block text-tagline-3 text-secondary/60">{item.desc}</span>
        </span>
      </Link>
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setPanelOpen(false);
  };

  return (
    <header>
      <div
        className={`fixed top-5 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-[1290px] -translate-x-1/2 items-center justify-between rounded-full bg-white/90 px-2.5 py-2.5 backdrop-blur-[25px] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_40px_-12px_rgba(13,13,18,0.18)]" : ""
        }`}
      >
        <Logo className="pl-1" />

        {/* desktop navigation */}
        <nav className="hidden items-center xl:flex" aria-label="Main">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.label} className="py-2.5">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full border border-transparent px-4 py-2 text-tagline-1 text-secondary/60 transition-all duration-200 hover:border-stroke-2 hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="relative py-2.5"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen((o) => !o)}
                className={`flex cursor-pointer items-center gap-1 rounded-full border px-4 py-2 text-tagline-1 transition-all duration-200 ${
                  megaOpen ? "border-stroke-2 text-secondary" : "border-transparent text-secondary/60 hover:text-secondary"
                }`}
              >
                All pages
                <ChevronDown className={`size-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {/* mega menu */}
              <div
                className={`absolute top-full left-1/2 z-50 w-[860px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                  megaOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <div className="flex gap-8 rounded-[20px] border border-stroke-1 bg-white p-5 shadow-lg">
                  <ul className="w-60 shrink-0 space-y-1">
                    {megaMenu.columnOne.map((item) => (
                      <MegaMenuItem key={item.label} item={item} />
                    ))}
                  </ul>
                  <ul className="w-60 shrink-0 space-y-1">
                    {megaMenu.columnTwo.map((item) => (
                      <MegaMenuItem key={item.label} item={item} />
                    ))}
                  </ul>
                  <Link href={megaMenu.featured.href} className="group relative block min-w-0 flex-1 overflow-hidden rounded-[14px]">
                    <Image
                      src={megaMenu.featured.image}
                      alt="Featured Suvo Dev project"
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute right-4 bottom-4 left-4 space-y-1 transition-all duration-500 group-hover:bottom-5">
                      <span className="block text-heading-6 font-medium text-white">{megaMenu.featured.title}</span>
                      <span className="block text-tagline-3 text-white/70">{megaMenu.featured.desc}</span>
                    </span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="hidden xl:flex">
          <Button href="/contact" size="md">
            Contact Us
          </Button>
        </div>

        {/* hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-background-4 xl:hidden"
        >
          <span className="sr-only">Open menu</span>
          <span className="block h-0.5 w-6 bg-background-8" />
          <span className="block h-0.5 w-6 bg-background-8" />
          <span className="block h-0.5 w-6 bg-background-8" />
        </button>
      </div>

      {/* mobile backdrop */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={closeMobile}
        className={`fixed inset-0 z-60 bg-secondary/40 transition-opacity duration-300 xl:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* mobile sidebar */}
      <aside
        className={`fixed top-0 left-0 z-70 flex h-dvh w-full flex-col overflow-hidden bg-white shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[min(100vw,22rem)] xl:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-stroke-1 px-7 py-5">
          <Link href="/" onClick={closeMobile} aria-label="Suvo Dev home">
            <LogoMark />
          </Link>
          <button
            type="button"
            onClick={closeMobile}
            className="flex size-9 cursor-pointer items-center justify-center rounded-md text-secondary transition-colors hover:bg-background-4"
          >
            <span className="sr-only">Close menu</span>
            <Close />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-7" aria-label="Mobile">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={closeMobile} className="block text-heading-6 text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setPanelOpen(true)}
                className="flex w-full cursor-pointer items-center justify-between text-left text-heading-6 text-secondary"
              >
                All pages
                <ArrowRight className="size-5" />
              </button>
            </li>
            <li>
              <Link href="/contact" onClick={closeMobile} className="block text-heading-6 text-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* "All pages" sub panel */}
        <div
          className={`absolute inset-0 z-10 flex flex-col bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            panelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center gap-2 border-b border-stroke-1 px-4 py-4">
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              className="flex size-9 cursor-pointer items-center justify-center rounded-md text-secondary hover:bg-background-4"
            >
              <span className="sr-only">Back</span>
              <ArrowRight className="size-5 rotate-180" />
            </button>
            <p className="flex-1 truncate text-base font-semibold text-secondary">All pages</p>
          </div>
          <ul className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            {allPages.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className="block rounded-lg px-4 py-3 text-heading-6 text-secondary transition-colors hover:bg-background-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  );
}
