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

  // const deletedUsers = await prisma.user.deleteMany({
  //   where: {
  //     name: "Marta",
  //   },
  // });

  // console.log(deletedUsers);

  // const upsertMethod = await prisma.user.upsert({
  //   where: {
  //     email: "leo@gmail.com",
  //   },
  //   update: {
  //     name: "Leito",
  //   },
  //   create: {
  //     email: "leo@gmail.com",
  //     name: "Leonardo",
  //     lastname: "Perez",
  //   },
  // });

  // console.log(upsertMethod);

  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "A new post",
  //     content: "This is the content of the new post, just created",
  //     author: {
  //       connect: {
  //         email: "marcos@gmail.com",
  //       },
  //     },
  //   },
  // });

  // console.log(newPost);

  // const users = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });
  // users.forEach((user) => {
  //   console.log("_______________________");
  //   console.log(user.email);
  //   console.log("Posts:");

  //   user.posts.forEach((post) => {
  //     console.log(" - " + post.title);
  //   });
  // });

  // const post = await prisma.post.create({
  //   data: {
  //     title: "Chocolate cake",
  //     content: "Chocolate cake are so good",
  //     author: {
  //       connect: {
  //         email: "marcos@gmail.com",
  //       },
  //     },
  //   },
  // });
}

main();
