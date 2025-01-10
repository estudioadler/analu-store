import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import SubscribeNews from "@/components/SubscribeNews";
import { SubscribeToast } from "@/components/SubscribeToast";
import { Testmonial } from "@/components/Testmonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <Testmonial />
      <SubscribeNews />
      <SubscribeToast />
      <Footer />
    </>
  );
}
