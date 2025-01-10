"use server";

import { prisma } from "@/lib/prisma";
import { convertPrismaProduct, Product } from "@/lib/types";

export const searchForProducts = async (searchTerm: string): Promise<Product[]> => {
  const prismaProducts = await prisma.product.findMany({
    where: {
      name: { contains: searchTerm, mode: "insensitive" },
    },
  });

  return prismaProducts.map(convertPrismaProduct);
};

