import React from "react";
import Slider from "react-slick";
import "./Slickslider.css";

const Slickslider=(images,settings)=>
{
    return( <div className="slider-wrapper">
        <Slider {...settings}>
{images.map((item,index)=>
{
  return(<div className="slider-box"><img key={index} src={item.carouselHomeImage} alt="carousel"/></div>);
})}
        </Slider>
      </div>
    );
}
export default Slickslider;