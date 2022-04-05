import React from 'react';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReactStarsRating from 'react-awesome-stars-rating';
import { Button } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

const handleRating = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };
  const handleReview = e => {
    console.log('Change:', e.target.value);
  };
const NewReview = ({ value }) => {
  return (
    <div className='container-fluid px-0 review-wrap'>
    <div className='row mt-2'>
    <div className='col-12 d-flex'>
    <RateReviewIcon className='rate-review-icon'/>
    <div className='rate-head'>Rate this product</div>
    <ReactStarsRating isHalf={false} size={20} onChange={handleRating} value={value} /></div>
    </div>
    <div className='row mt-2'>
    <div className='col-12 d-flex'>
    <div >Write your Review</div>
    </div>
    </div>
    <div className='row mt-2'>
    <div className='col-12'>
    <TextArea showCount maxLength={400} style={{ height: 120 }} onChange={handleReview} />
    </div>
    </div>
    <div className='row mt-2'>
    <div className='col-12'>
    <Button type="primary" block>
      Submit Review
    </Button>
    </div>
    </div>
    </div>
  )
}

export default NewReview