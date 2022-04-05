import React from 'react';
import profile from "../../../assets/profile.jpg";

const CustomerReviews = () => {
  const calculatedRating=3;
  const starPercentage = (calculatedRating / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div className='container-fluid px-0 mt-2 mb-2'>
    <div className='row'>
    <div className='review-user-pic'>
    <img src={profile} alt="profile" />
    </div>
    <div className='review-user-info px-0'>
    <div className='review-time'>8 days ago</div>
    <div className='review-user-name'>Carlos Smith</div>
    </div>
    <div className='reviews-content'>
    <div className='col-12 individual-product-rating mt-0'>
            <div className="seller-rating">
            <div className="rating-outerstar">
            <div className="rating-innerstar" style={{ width: starPercentageRounded}}></div>
            </div>
            </div>
    </div>
    <div className='col-12 reviews-text'>Good Product</div>
    </div>
    </div>
    </div>
  )
}

export default CustomerReviews