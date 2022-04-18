import React from "react";
import { ProductItem } from "./ProductItem";

const productsList = [
  {
    id: 1,
    name: "Cannon 1100d",
    price: 2250.00,
    image: "cannon1100d.jpg",
  },
  {
    id: 2,
    name: "Computer Set 1",
    price: 35500.00,
    image: "computer-setjpg.jpg",
  },
  {
    id: 3,
    name: "Computer set 2",
    price: 36000.00,
    image: "computer-set2.jpg",
  },
  {
    id: 4,
    name: "Hard ",
    name: "Hard isk",
    price: 2300.00,
    image: "hard-disk.png",
  },
  {
    id: 5,
    name: "Keyboad",
    price: 450.00,
    image: "keyboad.jpg",
  },
  {
    id: 6,
    name: "Laptop",
    price: 41000.00,
    image: "laptop.png",
  },
  {
    id: 7,
    name: "Mouse",
    price: 350.00,
    image: "mouse.jpg",
  },
  {
    id: 8,
    name: "ram",
    price: 1560.00,
    image: "ram.jpg",
  },
];

export const Products = ({ addToCart }) => {
  return (
    <div className="col-md-12 products">
      {productsList.map((item, i) => (
        <ProductItem key={i} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};
