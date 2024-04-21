import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Detail() {
  const [data, setData] = useState([]);
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
  }, [data]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-1 justify-center mx-6 px-8 pt-5 pl-16 pr-10 ">
      {data.map((data) => (
        <Card
          key={data.id}
          titleText={data.title}
          description={data.description}
          image={data.images}
          price={data.price}
        />
      ))}
    </div>
  );
}

export default Detail;
