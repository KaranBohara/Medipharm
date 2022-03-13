import React,{useEffect,useState,useRef} from 'react';
import apiCollection from '../../../api/api.js';
import Navbartop from "../../Navbar/Navbartop.js";
import ReactImageMagnify from "react-image-magnify";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Desktopfooter from '../../Desktop_footer/Desktopfooter.js';
import { Button } from 'antd';
import "./StarRating.css";
// import Slider from 'react-slick';
import "./Product.css";
import { useParams } from "react-router-dom";
import MultiCarousel from '../../Multi-Carousel/MultiCarousel.js';

const Product = () => {
  const params=useParams();
  const [medicine, setMedicine] = useState([]);
  const [medicines,setMedicines]=useState([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true)
  const starsTotal = 5;
  const starPercentage = (3.5 / starsTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  useEffect(() => {
  setLoading(true);
  if (componentMounted.current){
    apiCollection.getProduct()
    .then((res)=>
    {
      const myMed=res.data.data;
      setMedicines(myMed);
      setLoading(false);
      console.log(loading);
    })
    apiCollection.getProductById(params.pid)
    .then(response => {
     const myMed=response.data.data;
     setMedicine(myMed);
     setLoading(false);
     console.log(loading);
  });
  }
  return () => { 
    componentMounted.current = false; 
}
}, []);
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
      {!loading?<div className='col-lg-10 mx-auto product-body-container'>
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
      {medicine.map((item,index)=>
        {
         const bestPrice = item.Price - ((item.Discount * item.Price) / 100);
          return(
            <div className='row px-2' key={index}>
            <div className='col-10 mx-auto individual-image'><img src={item.Image} alt="" width="100%"/></div>
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
            <Button type="primary" className="col-12 individual-cart-button">ADD TO CART</Button>
            <div className='col-12 individual-description'>
            <div className='col-12 desc-tag'>Description :</div>
            <div className='col-lg-8 col-sm-12 desc-body'>{item.Description}</div>
            </div>
            </div>
          )
        })}
      </div>
      </div>
      :<h3>Loading...</h3>}
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto mt-3 head-label '>Similar Products</div>
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto col-11 mt-3 px-0 carousel-area'>
      <MultiCarousel/>
      </div>
      </div>
      </div>
      <div>
             <Desktopfooter/>
        </div>
      </div>
    
  )
}

export default Product