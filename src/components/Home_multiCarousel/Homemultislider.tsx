import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Homemultislider.css";
import "../Home_slider/Homecarousel.css";
const multiSliderData1=[
    {
        sliderHome1Image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632838405_Bold-care_mini-banner_web.jpg"
    },
    {
        sliderHome1Image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1629825345_Netmeds-ad-Kids-Vitty-Maxx-Aug-2021_436x224.jpg"
    },
    {
        sliderHome1Image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632425922_Bajaj_web.jpg"
    },
    {
        sliderHome1Image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1633112517_home-page-mini-banner-web-436-224.jpg"
    },
    {
        sliderHome1Image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1633005992_Mini-banner_web.jpg"
    },
]
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 592, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
const Homemultislider=(props:any)=>
{
    return(
      <>
      <div className="home-headings">
      <h5 style={{width:"92.5%",fontWeight:"bold",textAlign:"left"}}>Today's Picks</h5>
      </div>
      <Carousel
  swipeable={false}
  draggable={false}
  responsive={responsive}
  ssr={true} 
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="transform 2 ease-in-out"
  transitionDuration={200}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{multiSliderData1.map((item)=>
            {
                return(<div className="multi-slider-container"><img
                src={item.sliderHome1Image}
                alt="Slides"
              /></div>
               
              );
            })}
</Carousel>
</>
    );
}
export default Homemultislider;