import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBagAddIcon } from "hugeicons-react";
import { Tag } from "./Tag";

export function CarouselProducts() {
  const products = Array.from({ length: 5 }).map((_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    price: 9.99,
    image: `/image2.png`,
  }))
  return (
    <section className="w-full container mx-auto py-12 flex flex-col gap-6">
      <div className="flex flex-col">
        <h2 className="text-xl">O que vestir agora</h2>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {products.map((_, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/3">
              <div>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center relative border">
                    <Image
                      src={products[index].image}
                      alt="hero"
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="w-full p-4">
                      <h3 className="text-lg">{products[index].title}</h3>
                      <div className="flex items-center gap-2 text-lg">
                        <p className="text-neutral-400 line-through">R${products[index].price}</p>
                        <p>R${products[index].price}</p>
                      </div>
                    </div>
                    <Tag>Sale</Tag>
                  </CardContent>
                </Card>
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
