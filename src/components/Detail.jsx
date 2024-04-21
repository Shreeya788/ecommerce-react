import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useCart } from "../Provider/CartContext";

function Detail() {
  const [data, setData] = useState([]);
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }, []); // Removed data dependency to prevent unnecessary re-fetching

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart using addToCart function from CartContext
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-1 justify-center mx-6 px-8 pt-5 pl-16 pr-10 ">
      {data.map((product) => (
        <Card
          key={product.id}
          product={product} // Pass the entire product object as the prop
          addToCart={handleAddToCart} // Pass handleAddToCart function as prop
        />
      ))}
    </div>
  );
}

export default Detail;
