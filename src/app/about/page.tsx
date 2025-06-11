import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { metadata as siteMetadata, aboutContent } from "@/content/siteContent";

export const metadata = {
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
  keywords: siteMetadata.about.keywords,
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
      />
      <About />
      <Cta />
      <Footer />
    </main>
  );
}
