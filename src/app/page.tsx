import { Banner } from "@/components/Banner";
import { BestSellingProducts } from "@/components/BestSellingProducts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import SubscribeNews from "@/components/SubscribeNews";
import { SubscribeToast } from "@/components/SubscribeToast";
import { Testmonial } from "@/components/Testmonial";


export default function Home() {

  return (
    <>
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
