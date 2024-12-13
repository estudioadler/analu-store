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

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export function ProductCarousel({ products, title }: ProductCarouselProps) {
  return (
    <section>
      <h2 className="text-3xl font-medium max-w-xs tracking-tighter py-12">
        {title}
      </h2>

      <Carousel
        orientation="horizontal"
        opts={{
          align: "start",
        }}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {products.map((product) => (
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
    </section>
  );
}
