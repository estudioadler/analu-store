import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCarousel } from "@/components/ProductCarousel";
import SubscribeNews from "@/components/SubscribeNews";
import { SubscribeToast } from "@/components/SubscribeToast";
import { Testmonial } from "@/components/Testmonial";
import data from "@/lib/data";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <section className="container mx-auto px-6 py-8">
        <ProductCarousel products={data.products} title="Todos os Produtos" />
      </section>
      <Testmonial />
      <SubscribeNews />
      <SubscribeToast />
      <Footer />
    </>
  );
}
