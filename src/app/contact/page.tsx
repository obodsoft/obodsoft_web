import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { metadata as siteMetadata, contactContent } from "@/content/siteContent";

export const metadata = {
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
  keywords: siteMetadata.contact.keywords,
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHero
        title={contactContent.hero.title}
        subtitle={contactContent.hero.subtitle}
      />
      <Contact />
      <Footer />
    </main>
  );
}
