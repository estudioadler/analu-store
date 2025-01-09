import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight01Icon } from "hugeicons-react";

export const Banner = () => {
  const products = [
    {
      id: 1,
      image: "https://utfs.io/f/5mtAsAQDoNVdSoSLfuBjBTxsbyO2PgYEuwKDoVtCFW0qkfAn",
    },
    {
      id: 2,
      image: "https://utfs.io/f/5mtAsAQDoNVduYLdvtgvfNh0sc83LFj1PIoDmeqaXTKrgBxW",
    },
    {
      id: 3,
      image: "https://utfs.io/f/5mtAsAQDoNVdppRtL09wB1DHrkmYyZI9xvtgKo8UzA5XuaS6",
    },
  ];

  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-4 gap-4 px-4 md:px-6">
        {products.map((product) => (
          <Link href="#" key={product.id} className="block overflow-hidden rounded-xl">
            <div className="relative overflow-hidden rounded-xl group w-full h-[576px]">
              <Image
                src={product.image}
                alt="hero"
                fill
                sizes="100vw 576px 768px 1024px 1280px"
                priority
                className="object-cover transition-all duration-300 ease-in-out group-hover:blur-sm"
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
