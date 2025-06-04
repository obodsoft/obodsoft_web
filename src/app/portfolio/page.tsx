import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio | Obod Soft",
  description: "Explore projects that showcase our expertise.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Our Portfolio"
        subtitle="Real results for forward-thinking partners"
      />
      <Portfolio />
      <Cta />
      <Footer />
    </main>
  );
}
