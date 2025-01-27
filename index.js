import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "joseph@gmail.com",
      name: "Joseph",
      lastname: "Martinez",
    },
  });

  console.log(newUser);

  // const users = await prisma.user.findMany();

  // console.log(users);

  // const user = await prisma.user.findFirst({
  //   where: {
  //     AND: [
  //       {
  //         email: "leo@gmail.com",
  //       },
  //       {
  //         name: "Leonardo",
  //       },
  //     ],
  //   },
  // });

  // console.log(user.email + " - " + user.name + " - " + user.lastname);

  // try {
  //   const user = await prisma.user.delete({
  //     where: {
  //       email: "leo@gmail.com",
  //     },
  //   });
  // } catch (e) {
  //   console.log(e);
  // }

  // console.log(user); //devuelve el eliminado
}

main();
