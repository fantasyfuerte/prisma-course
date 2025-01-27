import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "marta2025@gmail.com",
  //     name: "Marta",
  //     lastname: "Perez",
  //   },
  // });
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "marta2025@gmail.com",
  //     name: "Marta",
  //     lastname: "Perez",
  //   },
  // });

  // console.log(newUser);

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

  // const modifiedUser = await prisma.user.updateMany({
  //   where: {
  //     name: "Marta",
  //   },
  //   data: {
  //     lastname: "Sanchez",
  //   },
  // });

  // console.log(modifiedUser); // devuelve un count del numero de registros modificados

  const deletedUsers = await prisma.user.deleteMany({
    where: {
      name: "Marta",
    },
  });

  console.log(deletedUsers);
  

}

main();
