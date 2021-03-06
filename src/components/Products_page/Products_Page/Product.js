import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {getProductRequest,addToCart,addToWishlist} from '../../../actions/productActions.js';
import Navbartop from "../../Navbar/Navbartop.js";
import loadingImage from "../../../assets/loading.gif"
import ReactImageMagnify from "react-image-magnify";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Desktopfooter from '../../Desktop_footer/Desktopfooter.js';
import { Button } from 'antd';
import "./StarRating.css";
import "./Product.css";
import { useParams } from "react-router-dom";
import MultiCarousel from '../../Multi-Carousel/MultiCarousel.js';
import { ToastContainer,toast,Slide } from "react-toastify";
import CustomerRatings from '../CustomerReviews/CustomerRatings.js';
import CustomerReviews from '../CustomerReviews/CustomerReviews.js';
import NewReview from '../CustomerReviews/NewReview.js';

const Product = (props) => {
  const {getProductRequest,product,addToCart,addToWishlist}=props;
  const params=useParams();
  useEffect(() => {
    getProductRequest(params.pid);
}, [getProductRequest,params.pid]);
    const handleCart=(pid)=>
    {
     addToCart(pid);
     toast.success("Product Added to Cart")
    }
    const handleWishList=(pid)=>
    {
     addToWishlist(pid);
    }
  const starsTotal = 5;
  const starPercentage = (3.5 / starsTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div>
    <ToastContainer className="toast-wrap" hideProgressBar draggable={false} position="top-right" transition={Slide} autoClose={1000} />
    {product.items.length>0?
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
    {product.items.map((item,index)=>{
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
              width: 800,
              height:800
            },
            isHintEnabled: true,
            enlargedImagePosition:"over",
          }}
        />
       )
      })}
      </div>
      <div className='product-right-wrap'>
      {product.items.map((item,index)=>
        {
         const bestPrice = Math.round(item.Price - ((item.Discount * item.Price) / 100));
          return(
            <div className='row ' key={index}>
            <div className='col-10 mx-auto individual-image'><img src={item.Image} alt="" width="80%" height="auto"/></div>
            <div className='col-12 individual-product-name'>{item.ProductName}</div>
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
            <div className='col-12 individual-best-price'><span style={{fontSize:"1rem",color:"black",marginRight:".5rem"}}>Best Price- </span><CurrencyRupeeIcon/>{bestPrice}</div>
            <div className="col-12 individual-product-manufacturer"><span style={{marginRight:".5rem"}}>Manufacturer -</span>{item.Manufacturer}</div>
            <div className='col-12'><Button type="primary" className="col-12 individual-cart-button" onClick={()=>handleCart(item.PId)}>ADD TO CART</Button></div>
            <div className='col-12'><Button type="danger" className="col-12 individual-wishlist-button" onClick={()=>handleWishList(item.PId)}>ADD TO WISHLIST</Button></div>
            <div className='col-12 individual-description'>
            <div className='col-12 desc-tag'>Description :</div>
            <div className='col-lg-8 col-sm-12 desc-body'>{item.Description}</div>
            </div>
            </div>
          )
        })} 
      </div>
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto mt-3 head-label '>Similar Products</div>
      </div>
      <div className='row'>
      <div className='col-lg-10 col-12 mx-auto mt-3 carousel-area'>
      <MultiCarousel/>
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto mt-3 head-label py-1'>Customer Reviews</div>
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto d-flex col-12 review-area'>
      <div className='col-xl-6 col-12'><CustomerRatings/></div>
      <div className='col-xl-5 col-12'><NewReview/></div>
      </div>
      <div className='col-lg-10 mx-auto d-flex col-12 review-area'>
      <CustomerReviews/>
      </div>
      </div>
      </div>
      <div>
      <Desktopfooter/>
      </div>
      </div>:<div className="col-10 loading-class"><img alt="loading" src={loadingImage} width="70%"/></div>}
      </div>
      
  )
}
export default connect(
  ({product }) => ({product }),
  {
    getProductRequest,
    addToCart,
    addToWishlist,
  }
)(Product);