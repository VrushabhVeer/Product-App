import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Products from "./Products";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:product_id" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
