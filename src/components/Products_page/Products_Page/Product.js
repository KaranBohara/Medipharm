import React,{useEffect,useState} from 'react';
import apiCollection from '../../../api/api.js';
import Navbartop from "../../Navbar/Navbartop.js";
import ReactImageMagnify from "react-image-magnify";
import "./StarRating.css";
// import Slider from 'react-slick';
import "./Product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const params=useParams();
  const [medicine, setMedicine] = useState([]);
  const starsTotal = 5;
  const starPercentage = (3.5 / starsTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  const getMedicines=()=>
  {
   apiCollection.getProductById(params.pid)
  .then(response => {
   const myMed=response.data.data;
   setMedicine(myMed);
});
  };
  useEffect(() => {
    getMedicines();
}, [medicine]);
  return (
      <div>
      <div><Navbartop/></div>
      <div className='container-fluid product-background'>
      <div className='row'>
      <div className='col-lg-10 mx-auto py-2 breadcrumbs-container'>
      <span>Home /</span><span>{params.category} /</span><span>{params.product}</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto py-2 product-body-container'>
      <div className='col-lg-5 col-md-8 col-sm-8 product-large-image'>
      {medicine.map((item,index)=>{
        const props = {width: 400, height: 250, zoomWidth: 500, img:item.Image};
        return( 
          <ReactImageMagnify
          key={index}
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: item.Image,
              sizes:
                "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw"
            },
            largeImage: {
              alt: "",
              src: item.Image,
              width: 900,
              height:900
            },
            shouldUsePositiveSpaceLens: true,
            isHintEnabled: true,
            enlargedImagePosition:"over",
          }}
        />
       )
      })}
      </div>
      <div className='col-lg-7'>
      {medicine.map((item,index)=>
        {
          return(
            <div className='row px-2'>
            <div className='col-12 individual-image'><img src={item.Image} alt="" width="100%"/></div>
            <div className='col-12 individual-product-name' key={index}>{item.ProductName}</div>
            <div className='col-12 individual-product-category'>{item.Category}</div>
            <div className='individual-product-rating'>
            <div className='individual-rating-star'>
            <div className="seller-rating">
            <div className="rating-outerstar">
            <div className="rating-innerstar" style={{ width: starPercentageRounded }}></div>
            </div>
            </div>
            </div>
            <div className='col-4 individual-review'>1 Rating & 2 Reviews</div>
            </div>
            </div>
          )
        })}
      </div>
      </div>
      </div>
      </div>
      </div>
    
  )
}

export default Product