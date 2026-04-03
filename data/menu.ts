export type MenuItem = {
  name: string
  image: string
  category: string
}

export const menuItems: MenuItem[] = [
  {
    name: "Bata Mixed Grill",
    image: "/images/mixed-grill.jpg",
    category: "signature",
  },
  {
    name: "Signature Cocktail Selection",
    image: "/images/cocktails.jpg",
    category: "drinks",
  },
  {
    name: "Grilled Chicken & Fries",
    image: "/images/chicken.jpg",
    category: "mains",
  },
  {
    name: "Golden Crumbed Fish & Chips",
    image: "/images/fish.jpg",
    category: "mains",
  },
  {
    name: "Bata Club Breakfast",
    image: "/images/breakfast.jpg",
    category: "breakfast",
  },
  {
    name: "Golden Stack Pancakes",
    image: "/images/pancakes.jpg",
    category: "breakfast",
  },
  {
    name: "Vanilla Bean Indulgence",
    image: "/images/icecream.jpg",
    category: "dessert",
  },
  {
    name: "Sadza neMaguru",
    image: "/images/sadza.jpg",
    category: "local",
  },
]