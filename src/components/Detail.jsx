import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Detail() {
  const baseURL = `https://dummyjson.com/products/`;
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [itemDetail, setItemDetail] = useState("");
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [baseURL]);
  const handleItemClick = (item) => {
    console.log(item);
    setItemDetail(item);
    setShow(true);
  };
  return (
    <div>
      {data ? (
        data.map((item, index) => (
          <Card
            onClick={() => handleItemClick(item)}
            key={index}
            item={item}
            size="10"
          />
        ))
      ) : (
        <div className="h-screen w-screen flex justify-center items-center text-black ">
          loading.....
        </div>
      )}
    </div>
  );
}

export default Detail;
