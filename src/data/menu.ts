export type Category = "Burgers" | "Fries" | "Shakes" | "Drinks" | "Extras";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  tags?: string[];
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export const categories: Category[] = [
  "Burgers",
  "Fries",
  "Shakes",
  "Drinks",
  "Extras"
];

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "classic-smash",
    name: "Classic Smash",
    price: 8.99,
    description: "Single smashed beef patty, American cheese, pickles, diced onions, Smash sauce on a toasted potato bun.",
    category: "Burgers",
    popular: true
  },
  {
    id: "double-smash",
    name: "Double Smash",
    price: 11.49,
    description: "Double smashed patties with double cheese, pickles, onions, Smash sauce.",
    category: "Burgers",
    popular: true
  },
  {
    id: "bacon-smash",
    name: "Bacon Smash",
    price: 10.99,
    description: "Crispy bacon, American cheese, pickles, onions, and smoky house sauce.",
    category: "Burgers"
  },
  {
    id: "jalapeno-smash",
    name: "Spicy Jalapeño",
    price: 10.49,
    description: "Smashed patty, pepper jack, pickled jalapeños, chipotle mayo.",
    category: "Burgers",
    spicy: true
  },
  {
    id: "veggie-smash",
    name: "Veggie Smash",
    price: 9.99,
    description: "Crispy griddled veggie patty, American cheese, lettuce, tomato, pickle, special sauce.",
    category: "Burgers",
    vegetarian: true
  },
  // Fries
  {
    id: "skinny-fries",
    name: "Skinny Fries",
    price: 3.49,
    description: "Crispy shoestring fries with sea salt.",
    category: "Fries",
    popular: true
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    price: 6.99,
    description: "Cheese sauce, bacon bits, scallions, and ranch drizzle.",
    category: "Fries"
  },
  // Shakes
  {
    id: "shake-vanilla",
    name: "Vanilla Shake",
    price: 5.49,
    description: "Classic vanilla made with real ice cream.",
    category: "Shakes",
    popular: true
  },
  {
    id: "shake-chocolate",
    name: "Chocolate Shake",
    price: 5.49,
    description: "Rich chocolate, whipped cream on top.",
    category: "Shakes"
  },
  {
    id: "shake-strawberry",
    name: "Strawberry Shake",
    price: 5.49,
    description: "Sweet strawberry with real fruit.",
    category: "Shakes"
  },
  // Drinks
  {
    id: "fountain-drink",
    name: "Fountain Drink",
    price: 2.49,
    description: "Assorted sodas.",
    category: "Drinks"
  },
  {
    id: "craft-soda",
    name: "Craft Soda",
    price: 3.49,
    description: "Rotating local selections.",
    category: "Drinks"
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    price: 1.99,
    description: "Still water.",
    category: "Drinks"
  },
  // Extras
  {
    id: "cheese",
    name: "Extra Cheese",
    price: 1.0,
    description: "Add a slice of American cheese.",
    category: "Extras"
  },
  {
    id: "bacon",
    name: "Extra Bacon",
    price: 2.0,
    description: "Two strips of crispy bacon.",
    category: "Extras"
  }
];
