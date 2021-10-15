import React from "react";
import Slider from "react-slick";
import "./Slickslider.css";
  interface Carouseldata
  {
    images:{}[],
    settings:{}
  }
const Slickslider=(props:Carouseldata)=>
{
    return( <div className="slider-wrapper">
        <Slider {...props.settings}>
{props.images.map((item:any,index:number)=>
{
  return(<div className="slider-box"><img key={index} src={item.carouselHomeImage} alt="carousel"/></div>);
})}
        </Slider>
      </div>
    );
}
export default Slickslider;