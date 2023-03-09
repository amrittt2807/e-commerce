import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./categories.style.scss";

const Categories = ({ categories }) => {
  const navigate = useNavigate();
  const navigateToCheckout =()=>{
    navigate("/checkout")
  }
  return (
    <div className="categories-container">
      {categories.map(({ id, imageUrl, title }) => {
        return (
          <div key={id} className="category-container" onClick={()=>navigate(`/shop/${title.toLocaleLowerCase()}`)}>
            
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />

            <div className="category-body-container">
              
                <h2>{title}</h2>
                <p>Shop Now</p>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
