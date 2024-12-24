"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./ProductCard";
import { Product } from "@/lib/types";
import Autoplay from "embla-carousel-autoplay";
import { shuffle } from "lodash"

interface ProductCarouselProps {
  title?: string;
  products: Product[];
}

export function ProductCarousel({ products, title }: ProductCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const shuffledProducts = React.useMemo(() => shuffle(products), [products]);
  return (
    <section>
      <h2 className="text-3xl font-medium max-w-xs tracking-tighter py-12">
        {title}
      </h2>
      <div>
        <Carousel
        orientation="horizontal"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {shuffledProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
         <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      
    </section>
  );
}
