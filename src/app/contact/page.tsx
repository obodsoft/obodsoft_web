import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Obod Soft",
  description: "Start a conversation with our team today.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your project"
      />
      <Contact />
      <Footer />
    </main>
  );
}
