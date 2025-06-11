import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { metadata as siteMetadata } from "@/content/siteContent";

export const metadata = {
  title: siteMetadata.services.title,
  description: siteMetadata.services.description,
  keywords: siteMetadata.services.keywords,
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Our Services"
        subtitle="Technology solutions designed for partnership and success"
      />
      <Services />
      <Cta />
      <Footer />
    </main>
  );
}
