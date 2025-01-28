import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.create({
    data: {
      name: "Chocolate",
      price: 2.5,
      stock: true,
      stars: 4,
    },
  });
  console.log(products);
}

main();
