import React from "react";

const Map = () => {
  //   const data = ["Google", "Microsoft", "facebook", "Amazon"];

  const smartPhones = [
    {
      id: 1,
      model: "Iphone 17 pro max",
      img: "https://m.media-amazon.com/images/I/61PwUsi+OgL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      model: "Samsung Galaxy S26 Ultra",
      img: "https://m.media-amazon.com/images/I/61UnzIc+97L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: 3,
      model: "One Plus 15",
      img: "https://m.media-amazon.com/images/I/61MZPmFWEYL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ];
  return (
    <>
      {smartPhones.map((data) => (
        <div key={data.id}>
            <img src = {data.img} />
            <h3> Model : {data.model}</h3>
        </div>
      ))}
      {/* {data.map((element, index) => (
        <div key={index}>
          <h1>
            {element} : {index}
          </h1>
        </div>
      ))} */}
    </>
  );
};

export default Map;
