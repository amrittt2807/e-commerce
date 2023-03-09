import React, { useContext } from "react";
import { ShowCartCard } from "../../Context/ShowCartCard/ShowCartCard";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./Cart-Icon.styles.scss";

const CartIcon = () => {
  const { cartItems } = useContext(ShowCartCard);
  
  const { showDropDown, setShowDropDown } = useContext(ShowCartCard);
  const showCartItems = () => setShowDropDown(!showDropDown);
  return (
    <div className="cart-icon-container" onClick={showCartItems}>
      
      <ShoppingIcon className="shopping-icon"  />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
