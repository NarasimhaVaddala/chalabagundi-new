import { Utensils, Coffee, Drumstick, Fish, Apple } from "lucide-react";
export const categories = [
  {
    name: "Tiffins",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Idly", icon: Utensils, value: "Idly" },
      { label: "Dosa", icon: Coffee, value: "Dosa" },
      { label: "Aapalu", icon: Apple, value: "Aapalu" },
      { label: "Pasarattu", icon: Apple, value: "Pasarattu" },
    ],
  },
  {
    name: "Biryani",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Veg Biryani", icon: Drumstick, value: "vegetarian" },
      { label: "Non Veg Biryani", icon: Fish, value: "non vegetarian" },
    ],
  },
  {
    name: "Pickle",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Veg Pickles", icon: Apple, value: "veg" },
      { label: "Non Veg Pickles", icon: Apple, value: "non veg" },
    ],
  },
  {
    name: "Cakes",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Normal Cakes", icon: Apple, value: "Normal Cakes" },
      { label: "Cool Cakes", icon: Apple, value: "Cool Cakes" },
      { label: "Cheesecakes", icon: Apple, value: "Cheesecakes" },
    ],
  },
  {
    name: "Meals",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Veg Meals", icon: Apple, value: "Veg Meals" },
      { label: "Non Veg Meals", icon: Apple, value: "Non Veg Meals" },
    ],
  },
];
