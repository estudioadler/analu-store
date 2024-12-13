import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight01Icon } from "hugeicons-react";

export const Banner = () => {
  const products = [
    {
      id: 1,
      image: "/image1.png",
    },
    {
      id: 2,
      image: "/image2.png",
    },
    {
      id: 3,
      image: "/image3.png",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-3 py-4 gap-4 px-6">
        {products.map((product) => (
          <Link href="#" key={product.id} className="block overflow-hidden rounded-xl">
            <div className="relative overflow-hidden rounded-xl group">
              <Image
                src={product.image}
                alt="hero"
                width={1200}
                height={600}
                className="transition-all duration-300 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" size="icon">
                  <ArrowUpRight01Icon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
