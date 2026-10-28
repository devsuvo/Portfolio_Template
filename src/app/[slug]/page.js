import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import Cta from "@/components/sections/Cta";
import { innerPages } from "@/data/site";

export function generateStaticParams() {
  return Object.keys(innerPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = innerPages[slug];
  return page ? { title: page.title, description: page.text } : {};
}

export default async function InnerPage({ params }) {
  const { slug } = await params;
  const page = innerPages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHero badge={slug.replace(/-/g, " ")} title={page.title} text={page.text} />
      <Cta />
    </>
  );
}
