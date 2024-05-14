

import { Banner } from "@/components/Banner";
import { CarouselProducts } from "@/components/CarouselProducts";
import { Hero } from "@/components/Hero";
import { Testmonial } from "@/components/Testmonial";

export default async function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <CarouselProducts />
      <Testmonial />
    </>
  );
}
