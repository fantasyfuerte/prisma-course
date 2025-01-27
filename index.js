import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "ryan@gmail.com",
      name: "Ryan",
      lastname: "Gosling",
    },
  });
}
