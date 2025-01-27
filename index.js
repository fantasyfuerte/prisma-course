import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "maria@gmail.com",
      name: "Maria",
      lastname: "Rodriguez",
    },
  });
  console.log(newUser);
}

main();
