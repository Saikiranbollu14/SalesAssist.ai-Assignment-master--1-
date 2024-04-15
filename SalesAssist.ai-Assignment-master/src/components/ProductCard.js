import React from "react";
import BagPlus from "../assets/bag-plus.svg";
import "./styles.css";

const ProductCard = ({ productDetails }) => {
  const { id, title, price, image } = productDetails;
  return (
    <>
      <li key={id} className='product-item'>
        <div className='product-card'>
          <div className='product-img'>
            <img src={image} alt={title} />
          </div>
          <h2>{title}</h2>
          <div className='product-desc'>
            <div>
              <h4>${price}</h4>
              <p>
                8999 <span>{"(50% Off)"}</span>
              </p>
            </div>

            <div className='add-cart'>
              <img src={BagPlus} alt='bag-icon' />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
