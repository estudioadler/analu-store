"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { QuoteUpIcon } from "hugeicons-react";

interface Testemunho {
  nome: string;
  cargo: string;
  mensagem: string;
}

const testemunhos: Testemunho[] = [
  {
    nome: "Clara Santos",
    cargo: "Cliente",
    mensagem:
      "Quero expressar minha gratidão pela incrível experiência que tive ao comprar na sua loja. A qualidade das roupas é impecável e o atendimento ao cliente foi excepcional. Mal posso esperar para voltar e adicionar mais peças ao meu guarda-roupa!",
  },
  {
    nome: "Sophia Oliveira",
    cargo: "Cliente",
    mensagem:
      "Estou simplesmente apaixonada pelas roupas que comprei na sua loja. Cada peça é única e reflete perfeitamente o meu estilo. Recebi tantos elogios sempre que uso uma delas! Definitivamente vou recomendar a sua loja para todos os meus amigos.",
  },
  {
    nome: "Isabella Costa",
    cargo: "Cliente",
    mensagem:
      "Agradeço imensamente pela rapidez na entrega da minha encomenda. Fiquei surpresa com o cuidado no empacotamento e com a qualidade das roupas. Vocês realmente superaram as minhas expectativas. Mal posso esperar para fazer mais compras!",
  },
  {
    nome: "Larissa Fernandes",
    cargo: "Cliente",
    mensagem:
      "Quero parabenizar a sua loja pelo excelente serviço prestado. As roupas são lindas e a variedade de estilos é incrível. Além disso, o processo de compra foi fácil e eficiente. Estou muito satisfeita com a minha experiência!",
  },
  {
    nome: "Mariana Silva",
    cargo: "Cliente",
    mensagem:
      "Estou extremamente feliz com as minhas compras na sua loja. As roupas são de alta qualidade e o preço é justo. Além disso, o atendimento ao cliente foi excepcional. Com certeza vou voltar a comprar aqui novamente!",
  },
  {
    nome: "Carolina Santos",
    cargo: "Cliente",
    mensagem:
      "Quero agradecer à sua loja por me ajudar a encontrar o vestido perfeito para uma ocasião especial. Recebi muitos elogios e me senti confiante e elegante. Vocês realmente entendem o que as mulheres procuram em termos de moda. Muito obrigada!",
  },
];

export function Testmonial() {
  return (
    <div className="w-full container mx-auto py-12 px-8 flex flex-col gap-6">
      <h2 className="text-3xl font-medium max-w-xs tracking-tighter py-12">Elas estão adorando nossos produtos</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className="px-0 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col gap-4 justify-center items-start p-8 bg-neutral-50 rounded-xl">
                    <div className="flex flex-col items-start">
                      <p className="text-right">{testemunhos[index].nome}</p>
                      <p className="text-right text-neutral-500">
                        {testemunhos[index].cargo}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div>
                        <QuoteUpIcon className="size-3" />
                      </div>
                      <p>{testemunhos[index].mensagem}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
