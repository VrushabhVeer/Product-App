import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.product_id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [params]);

  console.log(params);

  return (
    <div className="singleProduct">
      <div className="productDetail">
        <img src={data.image} alt="" />
        <h6>{data.title}</h6>
        <p>Price {data.price} $</p>
        <button>Add To Cart</button>
      </div>
      <div className="productDesc">
        <h4>Product Description</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
