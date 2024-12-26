import { prisma } from "@/lib/prisma";
import { convertPrismaProduct } from "@/lib/types";

export async function getProduct(slug: string) {
  const productData = await prisma.product.findUnique({
    where: { slug },
  });

  if (!productData) {
    return null;
  }

  return convertPrismaProduct(productData);
}

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { slug: true }
  });

  return products.map((product) => ({
    slug: product.slug,
  }));
}