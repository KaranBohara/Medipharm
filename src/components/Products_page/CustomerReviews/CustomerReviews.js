import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import "./CustomerReviews.css";

const CustomerReviews = () => {
  const starsTotal = 5;
  const ratingGiven=3.5;
  const starPercentage = (ratingGiven / starsTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div className='container-fluid px-0'>
    <div className='row'>
    <div className='col-12'>
    <div className='col-12 individual-product-rating mt-0'>
            <div className="seller-rating">
            <div className="customer-rating-outerstar">
            <div className="customer-rating-innerstar" style={{ width: starPercentageRounded }}></div>
            </div>
            </div>
            <div className='rating-info'>{ratingGiven} out of {starsTotal}</div>
    </div>
    </div>
    <div className='col-12 mt-1 d-flex text-secondary justify-content-flex-start'>
    14 ratings
    </div>
    <div className="col-12 mt-2">
    {/*<div className="progress skill-bar ">
        <div className="progress-bar bg-success five-star" role="progressbar" aria-valuenow="10" style={{width:"100%"}} aria-valuemin="0" aria-valuemax="100"> <span className="skill"><i className="fa fa-star"></i> 5 Star <i className="val">25 reviews</i></span> </div>
    </div>
    <div className="progress skill-bar">
        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"> <span className="skill"><i className="fa fa-star"></i> 4 star<i className="val">3 reviews</i></span> </div>
    </div>
    <div className="progress skill-bar">
        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"> <span className="skill"><i className="fa fa-star"></i> 3 star<i className="val">34 reviews</i></span> </div>
    </div>
    <div className="progress skill-bar">
        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> <span className="skill"><i className="fa fa-star"></i> 2 star<i className="val">1 review</i></span> </div>
    </div>
    <div className="progress skill-bar">
        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"> <span className="skill"><i className="fa fa-star"></i> 1 star<i className="val">10 reviews</i></span> </div>
    </div>
  */}
  <ProgressBar width="10" percent="10" bg="F4A23A"/>
  <ProgressBar width="14" percent="10" bg="55AB6F"/>
  <ProgressBar width="15" percent="10" bg="2496F3"/>
  <ProgressBar width="35" percent="10" bg="52BDD5"/>
  <ProgressBar width="40" percent="10" bg="EB453D"/>
</div>
    </div>
    </div>
  )
}

export default CustomerReviews