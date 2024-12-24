import { Banner } from "@/components/Banner";
import { BestSellingProducts } from "@/components/BestSellingProducts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import SubscribeNews from "@/components/SubscribeNews";
import { SubscribeToast } from "@/components/SubscribeToast";
import { Testmonial } from "@/components/Testmonial";


export default async function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <BestSellingProducts />
      <Testmonial />
      <SubscribeNews />
      <SubscribeToast />
      <Footer />
    </>
  );
}
