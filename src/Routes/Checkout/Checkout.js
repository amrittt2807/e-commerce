import React, { useContext } from "react";
import './Checkout.scss'
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import { ShowCartCard } from "../../Context/ShowCartCard/ShowCartCard";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(ShowCartCard);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ₹{cartTotal}</div>
    </div>
  );
};

export default Checkout;
