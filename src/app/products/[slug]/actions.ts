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
    select: { id: true },
  });

  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return { props: { product } };
}
