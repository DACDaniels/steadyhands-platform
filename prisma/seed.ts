import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  const starters = await prisma.menuCategory.create({
    data: {
      name: "Starters",
      description: "Begin your experience",
      items: {
        create: [
          {
            name: "Garlic Bread",
            description: "Toasted bread with garlic butter",
            price: 5,
            image: "/images/steak.jpg"
          },
          {
            name: "Chicken Wings",
            description: "Spicy grilled wings",
            price: 8,
            image: "/images/pasta.jpg"
          }
        ]
      }
    }
  })

  const mains = await prisma.menuCategory.create({
    data: {
      name: "Mains",
      description: "Signature dishes",
      items: {
        create: [
          {
            name: "Grilled Steak",
            description: "Premium grilled beef steak",
            price: 22,
            image: "/images/steak.jpg"
          },
          {
            name: "Signature Pasta",
            description: "Chef's special creamy pasta",
            price: 18,
            image: "/images/pasta.jpg"
          }
        ]
      }
    }
  })

  const desserts = await prisma.menuCategory.create({
    data: {
      name: "Desserts",
      items: {
        create: [
          {
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with molten center",
            price: 9,
            image: "/images/seafood.jpg"
          }
        ]
      }
    }
  })

}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })