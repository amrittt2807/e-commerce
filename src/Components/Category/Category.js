import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";
import { CategoriesContext } from "../../Context/Products/categories.context";
import ShopCard from "../ShopCard/ShopCard";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2>{category.toLocaleUpperCase()}</h2>
      {products ? (
        <div className="category-containers">
          {products.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <>
          <marquee behavior="scroll" direction="up" scrollamount="5">
            <h1>No items Found !</h1>
          </marquee>
          <marquee behavior="scroll" direction="down" scrollamount="5">
            <h1>No items Found !</h1>
          </marquee>
          <marquee behavior="scroll" direction="right" scrollamount="12">
            <h1>No items Found !</h1>
          </marquee>
          <marquee behavior="scroll" direction="left" scrollamount="20">
            <h1>No items Found !</h1>
          </marquee>
          <marquee behavior="scroll" direction="right" scrollamount="50">
            <h1>No items Found !</h1>
          </marquee>
        </>
      )}
    </>
  );
};
