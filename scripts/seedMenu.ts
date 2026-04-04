import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  await prisma.menuItem.createMany({
    data: [

      // 🍳 BREAKFAST
      { name: "Full Breakfast Experience", price: 7, category: "Breakfast" },
      { name: "Mini Breakfast", price: 5, category: "Breakfast" },
      { name: "Golden Stack Pancakes", price: 5, category: "Breakfast" },
      { name: "Eggs & Toast", price: 4, category: "Breakfast" },

      // 🍽️ MEALS
      { name: "Fish Fingers & Fries", price: 7, category: "Meals" },
      { name: "Grilled Chicken & Fries", price: 9, category: "Meals" },
      { name: "Beef Steak & Chips", price: 10, category: "Meals" },
      { name: "Chicken Schnitzel", price: 9, category: "Meals" },

      // 🍲 TRADITIONAL
      { name: "Sadza & Tripe", price: 6, category: "Traditional" },
      { name: "Sadza & Beef", price: 7, category: "Traditional" },
      { name: "Sadza & Chicken", price: 7, category: "Traditional" },
      { name: "Sadza & Fish", price: 8, category: "Traditional" },

      // 🥗 SALADS
      { name: "Coleslaw", price: 3, category: "Salads" },
      { name: "Greek Salad", price: 5, category: "Salads" },
      { name: "Chicken Salad", price: 6, category: "Salads" },

      // 🍔 BURGERS
      { name: "Beef Burger", price: 6, category: "Burgers" },
      { name: "Chicken Burger", price: 6, category: "Burgers" },
      { name: "Double Cheese Burger", price: 8, category: "Burgers" },

      // 🍖 PLATTERS
      { name: "Mixed Grill Platter", price: 20, category: "Platters" },
      { name: "Chicken Wings Platter", price: 12, category: "Platters" },
      { name: "Family Sharing Platter", price: 25, category: "Platters" },

      // 🧃 SOFT DRINKS
      { name: "Fresh Fruit Coolers", price: 3, category: "Drinks" },
      { name: "Signature Layered Cooler", price: 2, category: "Drinks" },
      { name: "Soft Drinks (Soda)", price: 2, category: "Drinks" },
      { name: "Bottled Water", price: 1, category: "Drinks" },

      // 🍺 BEERS
      { name: "Castle Lager", price: 3, category: "Alcohol" },
      { name: "Zambezi Lager", price: 3, category: "Alcohol" },
      { name: "Heineken", price: 4, category: "Alcohol" },

      // 🍷 WINES
      { name: "House Red Wine (Glass)", price: 5, category: "Alcohol" },
      { name: "House White Wine (Glass)", price: 5, category: "Alcohol" },
      { name: "House Red Wine (Bottle)", price: 15, category: "Alcohol" },
      { name: "House White Wine (Bottle)", price: 15, category: "Alcohol" },

      // 🥃 WHISKEY
      { name: "Jameson Whiskey", price: 4, category: "Alcohol" },
      { name: "Jack Daniels", price: 5, category: "Alcohol" },
      { name: "Ballantines", price: 4, category: "Alcohol" },

      // 🍹 CIDERS
      { name: "Savanna Dry", price: 3, category: "Alcohol" },
      { name: "Hunters Cider", price: 3, category: "Alcohol" },

      // 🍦 DESSERT
      { name: "Vanilla Ice Cream", price: 3, category: "Dessert" },
      { name: "Chocolate Sundae", price: 4, category: "Dessert" },

      // 👶 KIDS
      { name: "Kids Mini Breakfast", price: 4, category: "Kids" },
      { name: "Kids Chicken & Chips", price: 5, category: "Kids" },

      // 🍱 BUFFET
      { name: "Lunch Buffet", price: 10, category: "Buffet" },
      { name: "Dinner Buffet", price: 12, category: "Buffet" },

    ],
  })

  console.log("🔥 FULL REAL MENU INSERTED")
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })