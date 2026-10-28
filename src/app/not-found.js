import PageHero from "@/components/layout/PageHero";

export default function NotFound() {
  return (
    <PageHero
      badge="404"
      title="This page doesn’t exist"
      text="The page you’re looking for may have moved or never existed. Let’s get you back on track."
    />
  );
}
