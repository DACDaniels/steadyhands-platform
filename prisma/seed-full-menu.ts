import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  await prisma.menuItem.createMany({
    data: [

      // BREAKFAST
      { name: "Full Breakfast", price: 7, category: "Breakfast" },
      { name: "Mini Breakfast", price: 5, category: "Breakfast" },

      // TRADITIONAL
      { name: "Sadza & Beef", price: 6, category: "Traditional" },
      { name: "Sadza & Chicken", price: 7, category: "Traditional" },

      // MEALS
      { name: "Grilled Chicken", price: 9, category: "Meals" },
      { name: "Fish & Chips", price: 8, category: "Meals" },

      // BURGERS
      { name: "Beef Burger", price: 6, category: "Burgers" },
      { name: "Chicken Burger", price: 6, category: "Burgers" },

      // SALADS
      { name: "Coleslaw", price: 3, category: "Salads" },

      // DRINKS
      { name: "Soft Drink", price: 2, category: "Drinks" },
      { name: "Fresh Juice", price: 3, category: "Drinks" },

      // ALCOHOL
      { name: "Beer", price: 3, category: "Alcohol" },
      { name: "Wine Glass", price: 4, category: "Alcohol" },

    ],
    skipDuplicates: true
  })

  console.log("✅ Full menu inserted")

}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())