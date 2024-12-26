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

export async function getStaticPaths() {
  const products = await prisma.product.findMany({
    select: { slug: true },
  });

  return {
    paths: products.map((product) => ({
      params: { slug: product.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}
