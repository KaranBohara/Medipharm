import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import categoryData from "../../Navbar/product.json";
import "./Categoryslider.css";
const responsive = {
  mobile: {
    breakpoint: { max: 992, min: 0 },
    items: 3,
    slidesToSlide: 1 
  }
};
const Categoryslider=(props:any)=>
{
    return(
      <div className="mobile-multicategory-slider">
      <div className="category-heading">
      <h6 style={{width:"100%",fontWeight:"bold",textAlign:"left"}}>Categories</h6>
      </div>
      <Carousel
  swipeable={true}
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
  itemClass="carousel-item-padding-40-px"
>
{categoryData.map((item)=>
            {
                return(<div className="category-slider-container">
                <div className="image-box"><img
                src={item.navImage}
                alt="Slides"
              /></div>
              <div className="text-box">{item.navTitle}</div>
              </div> 
              );
            })}
</Carousel>
</div>
    );
}
export default Categoryslider;