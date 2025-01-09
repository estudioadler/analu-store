"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SubscribeNews() {
  return (
    <section className="w-full py-16 bg-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 max-w-sm">
          <h2 className="text-3xl font-medium max-w-[600px] tracking-tighter">
            Ganhe 20% de desconto <br /> em seu pedido hoje.
          </h2>
          <p className="text-gray-500">
            Assine e ganhe um desconto ao fazer sua primeira compra.
          </p>
          <form className="flex space-x-2">
            <Input
              className="max-w-lg flex-1"
              placeholder="Insira seu e-mail"
              type="email"
            />
            <Button type="submit" size={"lg"}>Inscreva-se</Button>
          </form>
        </div>
        <Image
          alt="Newsletter"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="550"
          src="/news.webp"
          width="550"
          priority
        />
      </div>
    </section>
  );
}
