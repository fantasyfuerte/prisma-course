import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.create({
    data: {
      name: "Phone",
      price: 89.99,
      stock: true,
    },
  });
  console.log(products);
}

main();
