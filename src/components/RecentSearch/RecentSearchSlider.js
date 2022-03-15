import React from "react";
import Carousel from 'react-multi-carousel';
import "./RecentSearchSlider.css";
const RecentSearchSlider = ({ data }) => {
  const item=data.data;
  return (
    <div className="col-12 border border-dark">
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
       {item && item.map((val, index) => {
          return (
            <div className="product-box" key={index}>
              <div>
                <img src={val.Image} alt="Slides" />
              </div>
              <div>{val.ProductName}</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default RecentSearchSlider;
