import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShowCartCard } from "../../Context/ShowCartCard/ShowCartCard";
import Button from "../Button/Button";
import CartItem from "../Cart_item/CartItem";
import "./cart-dropdown.styles.scss";

export const CartDropDown = () => {
  const { cartItems } = useContext(ShowCartCard);
  const navigate = useNavigate()
  const navigateToCheckout =()=>{
    navigate("/checkout")
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button buttonName="GO TO CHECKOUT" style={{ fontSize: "small" }} onClick ={navigateToCheckout}/>
    </div>
  );
};
