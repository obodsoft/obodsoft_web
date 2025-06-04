import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Obod Soft",
  description: "Learn more about our mission and team.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="About Obod Soft"
        subtitle="A passion for building polished digital products"
      />
      <About />
      <Cta />
      <Footer />
    </main>
  );
}
