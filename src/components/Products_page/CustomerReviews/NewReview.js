import React from 'react';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReactStarsRating from 'react-awesome-stars-rating';
const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };

const NewReview = ({ value }) => {
  return (
    <div className='container-fluid px-0 review-wrap'>
    <div className='row mt-2'>
    <div className='col-12 d-flex'>
    <RateReviewIcon className='rate-review-icon'/>
    <div className='rate-head'>Rate this product</div>
    <ReactStarsRating isHalf={false} size={20} onChange={onChange} value={value} /></div>
    </div>
    </div>
  )
}

export default NewReview