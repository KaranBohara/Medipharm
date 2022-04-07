import React,{useState} from 'react';
import profile from "../../../assets/profile.jpg";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const CustomerReviews = () => {
  const [thumbUp,setThumbUp]=useState(false);
  const [thumbDown,setThumbDown]=useState(false);
  const handleUpThumb=()=>
  {
    setThumbUp(true);
    setThumbDown(false);
  }
  const handleUpDown=()=>
  {
    setThumbDown(true);
    setThumbUp(false);
  }
  const calculatedRating=3;
  const starPercentage = (calculatedRating / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div className='container-fluid px-0 mt-2 mb-2'>
    <div className='row'>
    <div className='col-12 review-box'>
    <div className='user-review-wrap'>
    <div className='review-user-pic'>
    <img src={profile} alt="profile" />
    </div>
    <div className='review-user-info'>
    <div className='review-time'>8 days ago</div>
    <div className='review-user-name'>Carlos Smith</div>
    </div>
    </div>
    <div className='reviews-content'>
    <div className='col-12 d-flex justify-content-between mt-0'>
            <div className="seller-rating">
            <div className="rating-outerstar">
            <div className="rating-innerstar" style={{ width: starPercentageRounded}}></div>
            </div>
            </div>
            <div className='like-review'>
            <ThumbUpAltIcon onClick={handleUpThumb} className={`thumb-up ${thumbUp?'thumb-up-green':''}`}/>12
            <ThumbDownAltIcon onClick={handleUpDown} className={`thumb-down ${thumbDown?'thumb-down-red':''}`}/>2
            </div>
    </div>
    <div className='col-12 reviews-text'>Good Product</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CustomerReviews