import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 9.99,
      image: "/image1.png",
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      image: "/image2.png",
    },
    {
      id: 3,
      title: "Product 3",
      price: 29.99,
      image: "/image3.png",
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-3 py-4 gap-1">
        {products.map((product) => (
          <Link href="#" className="relative" key={product.id}>
            <Image src={product.image} alt="hero" width={1200} height={600} />
            <div className="absolute bottom-6 left-6 uppercase text-neutral-100">
              {product.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
