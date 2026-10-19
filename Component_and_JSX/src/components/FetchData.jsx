import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [Api_data, setApi_data] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await api.json();
      console.log(data);

      //
      setApi_data(data);
    };
    FetchData();
  }, []);
  return (
    <div>
      {Api_data.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })}
    </div>
  );
};

export default FetchData;
