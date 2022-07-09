import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// https://fakestoreapi.com/products

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
    console.log();
  }, []);

  return (
    <div>
      <div className="container">
        {data.map((product) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/products/${product.id}`}
          >
            <div className="productDiv" key={product.id}>
              <img src={product.image} alt="" />
              <h6>{product.title}</h6>
              <p>Price {product.price} $</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
