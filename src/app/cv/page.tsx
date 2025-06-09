import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CV from "@/components/CV";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CV | Obod Soft",
  description: "Professional experience and skills of Alex Obodsoft",
};

export default function CvPage() {
  return (
    <main>
      <Header />
      <PageHero title="Curriculum Vitae" subtitle="Get to know my professional background" />
      <CV />
      <Footer />
    </main>
  );
}
