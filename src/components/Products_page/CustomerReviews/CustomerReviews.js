import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import StarIcon from '@mui/icons-material/Star';
import "./CustomerReviews.css";

const CustomerReviews = () => {
  const rating={
    fiveStar:4,
    fourStar:3,
    threeStar:10,
    twoStar:12,
    oneStar:11
  }
  const starsTotal = 5;
  const totalScore=((rating.fiveStar*5)+(rating.fourStar*4)+(rating.threeStar*3)+(rating.twoStar*2)+rating.oneStar)
  const responses=(rating.fiveStar+rating.fourStar+rating.threeStar+rating.twoStar+rating.oneStar);
  const calculatedRating=(totalScore/responses).toFixed(1);
  const starPercentage = (calculatedRating / starsTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div className='container-fluid px-0 border-right-div'>
    <div className='row'>
    <div className='col-12'>
    <div className='col-12 individual-product-rating mt-0'>
            <div className="seller-rating">
            <div className="customer-rating-outerstar">
            <div className="customer-rating-innerstar" style={{ width: starPercentageRounded }}></div>
            </div>
            </div>
            <div className='rating-info'>{calculatedRating} out of {starsTotal}</div>
    </div>
    </div>
    <div className='col-12 mt-1 d-flex text-secondary justify-content-flex-start'>
    {responses} ratings
    </div>
    <div className="col-12 mt-2 d-flex flex-column">
  <div className='progress-bar-container'><span className='text-secondary'>5</span><StarIcon className='five-star'/>
  <ProgressBar width="1" percent="10" bg="F4A23A"/><span className='text-secondary mx-2'>({rating.fiveStar})</span></div>
  <div className='progress-bar-container'><span className='text-secondary'>4</span><StarIcon className='four-star'/>
  <ProgressBar width="4" percent="10" bg="55AB6F"/><span className='text-secondary mx-2'>({rating.fourStar})</span></div>
  <div className='progress-bar-container'><span className='text-secondary'>3</span><StarIcon className='three-star'/>
  <ProgressBar width="5" percent="10" bg="2496F3"/><span className='text-secondary mx-2'>({rating.threeStar})</span></div>
  <div className='progress-bar-container'><span className='text-secondary'>2</span><StarIcon className='two-star'/>
  <ProgressBar width="3" percent="10" bg="52BDD5"/><span className='text-secondary mx-2'>({rating.twoStar})</span></div>
  <div className='progress-bar-container'><span className='text-secondary'>1</span><StarIcon className='one-star'/>
  <ProgressBar width="7" percent="10" bg="EB453D"/><span className='text-secondary mx-2'>({rating.oneStar})</span></div>
</div>
    </div>
    </div>
  )
}

export default CustomerReviews