import React from "react";
import "./Shop.scss"
import { Route, Routes } from "react-router-dom";
import  CategoriesPreview  from "../categories-preview/CategoriesPreview";
import {Category} from "../../Components/Category/Category"


const Shop = () => {
  

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
