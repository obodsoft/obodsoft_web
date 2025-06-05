import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import LogoWall from "@/components/LogoWall";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Logo Wall | Obod Soft",
  description: "A showcase of popular AI tools.",
};

export default function LogoWallPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="AI Logo Wall"
        subtitle="Explore the tools driving innovation in AI"
      />
      <LogoWall />
      <Cta />
      <Footer />
    </main>
  );
}
