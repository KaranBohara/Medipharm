import React from "react";
import CartIcon from "../../assets/emptycart.jpg";

const Emptycart = () => {
  return <div className="empty-container">
               <div className='cart-left-section'>
               <img src={CartIcon} alt="cart"></img>
               </div>
               <div className='cart-right-section'>
               <div className="cart-heading1">Your Cart is empty</div>
               <div className="cart-heading2">You have not added anything in the cart yet.</div>
               <button><span>Get Offers</span></button>
               </div>
  </div>;
};

export default Emptycart;
