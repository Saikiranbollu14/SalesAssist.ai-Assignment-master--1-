import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import ArrowIcon from "../assets/arrow-up.svg";
import "./styles.css";

const URL = "https://fakestoreapi.com/products";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  const fetchProductsData = async (apiUrl) => {
    try {
      const response = await axios.get(apiUrl);
      if (!response.status === 200) {
        throw new Error("Data Not Found");
      } else {
        setData(response.data);
      }
    } catch (error) {
      console.log("Error while fetching Api", error);
    }
  };

  useEffect(() => {
    fetchProductsData(URL);
  }, []);

  return (
    <div className='products-page'>
      <div className='product-line'>
        <p>Bags . Backpacks</p>
        <div className='product-count'>
          <p>13 products</p>
          <img src={ArrowIcon} alt='arrow-icon' />
        </div>
      </div>
      <div className='product-items'>
        <ul>
          {data.map((item) => (
            <ProductCard key={item.id} productDetails={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsPage;
