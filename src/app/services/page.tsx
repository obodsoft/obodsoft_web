import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Obod Soft",
  description: "Discover the solutions we offer to elevate your business.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Our Services"
        subtitle="Digital solutions tailored for ambitious brands"
      />
      <Services />
      <Cta />
      <Footer />
    </main>
  );
}
