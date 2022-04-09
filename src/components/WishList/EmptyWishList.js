import React from 'react';
import WishlistIcon from "../../assets/emptybag.png";

const EmptyWishList = () => {
  return (
    <div className="empty-container">
    <div className='cart-left-section'>
    <img src={WishlistIcon} alt="cart"></img>
    </div>
    <div className='cart-right-section'>
    <div className="cart-heading1">Your WishList is empty</div>
    <div className="cart-heading2">Tap heart button to save your favourite items</div>
    <button><span>Add Now</span></button>
    </div>
</div>
  )
}

export default EmptyWishList