import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}
