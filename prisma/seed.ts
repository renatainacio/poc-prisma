import prisma from "../src/configs/database.connection"

 
  async function createDefaultBooks() {
    console.log("Creating default books!");
    await prisma.book.upsert({
        create: {
            author: "Machado de Assis",
            title: "Dom Casmurro",
            pages: 192
        },
        update: {},
        where: {
            id: 1
        }
    });
  
  }
  
  async function main() {
    return createDefaultBooks();
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    })