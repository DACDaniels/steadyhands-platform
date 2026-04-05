import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  await prisma.menuItem.deleteMany()

  await prisma.menuItem.createMany({
    data: [

      // ================= BREAKFAST =================
      {
        name: "Full Breakfast",
        description: "Muffin or pancake, toast (white/brown), eggs (omelette/scrambled), bacon, sausage, mushroom, beans, grilled tomato, tea/coffee/juice",
        price: 12,
        category: "Breakfast"
      },
      {
        name: "Mini Breakfast",
        description: "Toast, 1 egg, sausage, beans, tomato, tea/coffee/juice",
        price: 7,
        category: "Breakfast"
      },

      // ================= MEALS =================
      { name: "4 Chef Special Wings", description: "Chef marinated wings", price: 5, category: "Meals" },
      { name: "4 Plain Wings", description: "Plain fried wings", price: 4, category: "Meals" },
      { name: "4 BBQ Wings", description: "BBQ glazed wings", price: 5, category: "Meals" },
      { name: "Quarter Chicken", description: "Plain, lemon & herb, BBQ or hot", price: 5, category: "Meals" },
      { name: "Chicken Stir Fry", description: "Served with side", price: 7, category: "Meals" },
      { name: "Chicken Schnitzel", description: "Crispy crumbed chicken", price: 8, category: "Meals" },
      { name: "Half Chicken", description: "Grilled half chicken", price: 10, category: "Meals" },
      { name: "Full Chicken", description: "Whole grilled chicken", price: 20, category: "Meals" },
      { name: "T-Bone", description: "Grilled steak served with side", price: 12, category: "Meals" },
      { name: "Prime Rib", description: "Served with rice, sadza, chips or butternut", price: 10, category: "Meals" },

      // ================= TRADITIONAL =================
      { name: "Chicken Makaya", description: "Traditional chicken dish", price: 5, category: "Traditional" },
      { name: "Matumbu", description: "Tripe cooked traditionally", price: 5, category: "Traditional" },
      { name: "Madora", description: "Mopane worms delicacy", price: 5, category: "Traditional" },
      { name: "Matemba ane Dovi", description: "Kapenta with peanut butter sauce", price: 5, category: "Traditional" },
      { name: "Mazondo", description: "Cow trotters", price: 3, category: "Traditional" },
      { name: "Maguru", description: "Chicken feet", price: 5, category: "Traditional" },
      { name: "Liver", description: "Fried liver", price: 6, category: "Traditional" },
      { name: "Tsuro", description: "Rabbit meat", price: 6, category: "Traditional" },
      { name: "Sugar Beans", description: "Beans stew", price: 2, category: "Traditional" },

      // ================= BURGERS =================
      { name: "Single Burger", description: "Beef burger", price: 5, category: "Burgers" },
      { name: "Single Cheese Burger", description: "Beef burger with cheese", price: 6, category: "Burgers" },
      { name: "Double Beef Burger", description: "Double patty burger", price: 7, category: "Burgers" },
      { name: "Double Cheese Burger", description: "Double patty with cheese", price: 8, category: "Burgers" },
      { name: "Plain Chips", description: "Side of chips", price: 2, category: "Burgers" },

      // ================= PLATTERS =================
      {
        name: "Platter",
        description: "4 wings, pork, sausage, chips, salad, sauce",
        price: 15,
        category: "Platters"
      },
      {
        name: "Platter",
        description: "4 wings, beef, pork, sausage, chips, salad, sauce",
        price: 25,
        category: "Platters"
      },
      {
        name: "Platter",
        description: "4 drumsticks, beef, pork, sausage, 8 meatballs, onion rings, chips, salad, sauce",
        price: 35,
        category: "Platters"
      },

      // ================= SALADS =================
      { name: "Coleslaw", description: "Fresh cabbage salad", price: 3, category: "Salads" },
      { name: "Greek Salad", description: "Mixed vegetables with feta", price: 5, category: "Salads" },
      { name: "Garden Salad", description: "Fresh mixed greens", price: 3, category: "Salads" },
      { name: "Egg Mayo", description: "Egg mayonnaise salad", price: 3, category: "Salads" },
      { name: "Potato Salad", description: "Creamy potato salad", price: 3, category: "Salads" },

      // ================= DESSERT =================
      { name: "Ice Cream", description: "Cold dessert", price: 2, category: "Dessert" },
      { name: "Fruit Salad", description: "Mixed fruits", price: 4, category: "Dessert" },
      { name: "Cake", description: "Slice of cake", price: 3, category: "Dessert" },

      // ================= KIDS =================
      { name: "Spaghetti Bolognese", description: "Pasta with meat sauce", price: 5, category: "Kids" },
      { name: "Drumstick & Wings", description: "Served with chips", price: 3, category: "Kids" },
      { name: "Fish Fingers", description: "Served with chips", price: 4, category: "Kids" },
      { name: "Mac & Cheese", description: "Cheesy pasta", price: 5, category: "Kids" },
      { name: "Vienna & Chips", description: "Sausage with chips", price: 3, category: "Kids" },

      // ================= DRINKS =================
      { name: "Bottle Drink", description: "", price: 0.5, category: "Drinks" },
      { name: "Can Drink", description: "", price: 1, category: "Drinks" },
      { name: "Minute Maid", description: "", price: 1.5, category: "Drinks" },
      { name: "Liqui Fruit 1L", description: "", price: 4, category: "Drinks" },
      { name: "Fruit Tree", description: "", price: 3, category: "Drinks" },
      { name: "Ceres", description: "", price: 4, category: "Drinks" },
      { name: "Revive 1L", description: "", price: 1.5, category: "Drinks" },
      { name: "Ginger Ale", description: "", price: 1.5, category: "Drinks" },

      // ================= BEERS =================
      { name: "Castle Pint", description: "", price: 1, category: "Alcohol" },
      { name: "Castle Quart", description: "", price: 2, category: "Alcohol" },
      { name: "Black Label Pint", description: "", price: 1, category: "Alcohol" },
      { name: "Zambezi Pint", description: "", price: 1.5, category: "Alcohol" },
      { name: "Windhoek Lager", description: "", price: 2, category: "Alcohol" },
      { name: "Heineken", description: "", price: 2, category: "Alcohol" },
      { name: "Corona", description: "", price: 2, category: "Alcohol" },

      // ================= CIDERS =================
      { name: "Savanna Dry", description: "", price: 2, category: "Alcohol" },
      { name: "Hunters Gold", description: "", price: 2, category: "Alcohol" },
      { name: "Hunters Dry", description: "", price: 2, category: "Alcohol" },
      { name: "Brutal Fruit Ruby Apple", description: "", price: 2.5, category: "Alcohol" },
      { name: "Brutal Fruit Strawberry", description: "", price: 2.5, category: "Alcohol" },

      // ================= WINES =================
      { name: "4th Street Sweet Red 750ml", description: "", price: 12, category: "Alcohol" },
      { name: "4th Street Sweet Rose 750ml", description: "", price: 8, category: "Alcohol" },
      { name: "Namaqua Sweet Red 750ml", description: "", price: 7, category: "Alcohol" },

      // ================= WHISKY =================
      { name: "Jameson", description: "", price: 2, category: "Alcohol" },
      { name: "Jack Daniels Honey", description: "", price: 2, category: "Alcohol" },

    ],
  })

  console.log("✅ FULL MENU LOADED")

}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())