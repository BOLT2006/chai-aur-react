import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Product = () => {
  return (
    <>
      <div>
        <h2>Products Page</h2>
        <nav>
          <Link to="phones">Phones</Link> | <Link to="laptops">Laptops</Link> |{" "}
          <Link to="camera">Camera</Link>
        </nav>
        {/* ❌ No Outlet → child categories will NOT render */}
        <Outlet/>

      </div>
    </>
  );
};


export default Product;