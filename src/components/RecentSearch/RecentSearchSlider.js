import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./RecentSearchSlider.css";
const responsive = {
  md: {
    breakpoint: { max: 992, min: 592 },
    items: 4,
    slidesToSlide: 1 
  },
  sm: {
    breakpoint: { max: 592, min: 0 },
    items: 3,
    slidesToSlide: 1 
  }
};
const RecentSearchSlider=(props)=>
{
    return(
      <div className="search-slider">
      <Carousel
  swipeable={true}
  arrows={false}
  draggable={true}
  responsive={responsive}
  ssr={true} 
  infinite={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="transform 2 ease-in-out"
  transitionDuration={200}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
>
{props.items.map((item,index)=>
            {
                return(<div className="search-slider-container" key={index}>
                <div className="image-box"><img
                src={item.imageURL}
                alt="Slides"
              /></div>
              <div className="text-box">{item.name}</div>
              </div> 
              );
            })}
</Carousel>
</div>
    );
}
export default RecentSearchSlider;