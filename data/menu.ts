export type MenuItem = {
  name: string
  image: string
  category: string
}

export const menuItems: MenuItem[] = [
  {
    name: "Bata Mixed Grill",
    image: "/images/mixed-grill.webp",
    category: "signature",
  },
  {
    name: "Signature Cocktail Selection",
    image: "/images/cocktails.webp",
    category: "drinks",
  },
  {
    name: "Grilled Chicken & Fries",
    image: "/images/chicken.webp",
    category: "mains",
  },
  {
    name: "Golden Crumbed Fish & Chips",
    image: "/images/fish.webp",
    category: "mains",
  },
  {
    name: "Bata Club Breakfast",
    image: "/images/breakfast.webp",
    category: "breakfast",
  },
  {
    name: "Golden Stack Pancakes",
    image: "/images/pancakes.webp",
    category: "breakfast",
  },
  {
    name: "Vanilla Bean Indulgence",
    image: "/images/icecream.webp",
    category: "dessert",
  },
  {
    name: "Sadza neMaguru",
    image: "/images/sadza.webp",
    category: "local",
  },
]