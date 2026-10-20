import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Phones from "./Pages/Phones";
import Laptops from "./Pages/Laptops";
import Camera from "./Pages/Camera";


const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            {/* Products parent route */}
            <Route path="products" element={<Product />}>
              {/* Child routes */}
              <Route path="phones" element={<Phones />} />
              <Route path="laptops" element={<Laptops />} />
              <Route path="camera" element={<Camera />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Index;
