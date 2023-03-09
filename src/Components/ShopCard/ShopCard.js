import { useContext } from "react";
import { ShowCartCard } from "../../Context/ShowCartCard/ShowCartCard";
import Button from "../Button/Button";
import './shop-card.styles.scss'

const ShopCard = ({ product }) => {
  const { addItemToCart } = useContext(ShowCartCard);
  const { name, imageUrl, price } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button buttonType="inverted" buttonName="Add to cart" onClick={addProductToCart}/>
    </div>
  );
};
export default ShopCard;
