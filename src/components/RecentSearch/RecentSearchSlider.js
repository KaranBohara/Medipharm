import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./RecentSearchSlider.css";
const responsive = {
  md: {
    breakpoint: { max: 992, min: 592 },
    items: 4,
    slidesToSlide: 1,
  },
  sm: {
    breakpoint: { max: 592, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};
const RecentSearchSlider = ({ data }) => {
  const item=data.data;
  return (
    <div className="col-12 border border-dark">
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
        dotListClass="custom-dot-list-style"
      ><div>
       {item && item.map((val, index) => {
          return (
            <div className="search-slider-container col-12 border border-dark" key={index}>
              <div className="image-box">
                <img src={val.Image} alt="Slides" />
              </div>
              <div className="text-box">{val.ProductName}</div>
            </div>
          );
        })}
        </div>
      </Carousel>
    </div>
  );
};
export default RecentSearchSlider;
