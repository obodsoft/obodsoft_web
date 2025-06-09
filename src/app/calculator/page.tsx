import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";

export const metadata = {
  title: "Calculator | Obod Soft",
  description: "Simple calculator inspired by iOS design.",
};

export default function CalculatorPage() {
  return (
    <main>
      <Header />
      <Calculator />
      <Footer />
    </main>
  );
}
