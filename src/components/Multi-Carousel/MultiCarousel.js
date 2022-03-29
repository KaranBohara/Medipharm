import React,{useState,useEffect} from "react";
import apiCollection from "../../api/api";
import Carousel from 'react-multi-carousel';
import {Link} from "react-router-dom";

const MultiCarousel = () => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
      let cancel=false;
        apiCollection.getProduct()
        .then((res)=>
        {
          const myMed=res.data.data;
          if (cancel) return ;
          setMedicines(myMed);
        })
        return () => {cancel=true;}
    }, []);
  return (
    <div className="col-12">
    <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay={false}
  centerMode={false}
  className=""
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 4000,
        min: 992
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 592,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30,
      arrows:false,
      autoPlay:false
    },
    ltablet: {
      breakpoint: {
        max: 992,
        min: 786
      },
      items: 3,
      partialVisibilityGutter: 30
    },
    mtablet: {
        breakpoint: {
          max: 786,
          min: 592
        },
        items: 2,
        partialVisibilityGutter: 30
      },
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
{medicines.map((item, index) => {
    const bestPrice = item.Price - ((item.Discount * item.Price) / 100);
    return (      <Link to={`/product/${item.Category}/${item.ProductName}/${item.PId}`} className="link-decoration-body" key={index}>             
            <div className="animate__animated animate__jackInTheBox product-box">
                <div className="discount-tab"><span style={{backgroundColor:"green",padding:".2rem",borderRadius:".2rem"}}>{item.Discount}%OFF</span></div>
                <div className="product-image-box"><img alt="product" src={item.Image}></img></div>
                <div className="product-name">{item.ProductName}</div>
                <div className="product-manufacturer">{item.Manufacturer}</div>
                <div className="product-bestprice">Rs.{bestPrice}</div>
                <div className="product-price">Rs.{item.Price}</div>
            </div>
            </Link>
    );
})}
</Carousel>
    </div>
  )
}

export default MultiCarousel