import React from "react";
import Product from "./components/Product";
import Item from "./components/Item";

const App = () => {
  const obj = {
    processor : "A-9 chip",
    Battery : "5000mh"
  }
  return (
    <>
      <Product name="Iphone -15" price={70000} color="Black" obj = {obj} />
      <Product name="Iphone -16" price={70000} color="White" />
      {/* <Item/> */}
    </>
  );
};

export default App;
