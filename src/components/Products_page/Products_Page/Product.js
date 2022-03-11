import React,{useEffect,useState} from 'react';
import apiCollection from '../../../api/api.js';
import Navbartop from "../../Navbar/Navbartop.js";
import ReactImageMagnify from "react-image-magnify";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
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
      <div className='col-lg-10 col-md-12 mx-auto py-2 breadcrumbs-container'>
      <span>Home /</span><span>{params.category} /</span><span>{params.product}</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto product-body-container'>
      <div className=' product-large-image'>
      {medicine.map((item,index)=>{
        return( 
          <ReactImageMagnify
          key={index}
          {...{
            smallImage: {
              alt: item.ProductName,
              isFluidWidth: true,
              src: item.Image,
              width:100,
              height:200,
            },
            largeImage: {
              alt: item.ProductName,
              src: item.Image,
              width: 900,
              height:900
            },
            isHintEnabled: true,
            enlargedImagePosition:"over",
          }}
        />
       )
      })}
      </div>
      <div className='product-right-wrap'>
      {medicine.map((item,index)=>
        {
         const bestPrice = item.Price - ((item.Discount * item.Price) / 100);
          return(
            <div className='row px-2'>
            <div className='col-10 mx-auto individual-image'><img src={item.Image} alt="" width="100%"/></div>
            <div className='col-12 individual-product-name' key={index}>{item.ProductName}</div>
            <div className='col-12 individual-product-category'>{item.Category}</div>
            <div className='col-12 individual-product-rating'>
            <div className='individual-rating-star'>
            <div className="seller-rating">
            <div className="rating-outerstar">
            <div className="rating-innerstar" style={{ width: starPercentageRounded }}></div>
            </div>
            </div>
            </div>
            <div className='individual-review'>1 Rating & 2 Reviews</div>
            </div>
            <div className='individual-best-price'><span style={{fontSize:"1rem",color:"black",marginRight:".5rem"}}>Best Price- </span><CurrencyRupeeIcon/>{bestPrice}</div>
            <div className="individual-product-manufacturer"><span style={{marginRight:".5rem"}}>Manufacturer -</span>{item.Manufacturer}</div>
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