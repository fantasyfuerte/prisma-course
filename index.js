import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const newUser = await prisma.user.create({
  //     data: {
  //       email: "leo@gmail.com",
  //       name: "Leonardo",
  //       lastname: "Rossi",
  //     },
  //   });
  //   console.log(newUser);

  //   const users = await prisma.user.findMany();
  //   console.log(users);

  const user = await prisma.user.findFirst({
    where: {
      AND: [
        {
          email: "leo@gmail.com",
        },
        {
          name: "Leonardo",
        },
      ],
    },
  });
  console.log(user.email + " - " + user.name + " - " + user.lastname);
}

main();
