import "./Homecarousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
const carouselDataDesktop=[
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632501193_Home_bannerma257.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632398476_Home_bannerma25.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632400446_Homegfhfh.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632407226_jhyfh.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632406249_freehome.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1631892365_Homecvvb.jpg"
    },
]

const carouselDataResponsive=[
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/offers/1632405210_Lanfreeipl.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632491062_NMSPP100-Mobile.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632401033_NMSDEBUT-MOBILE.jpg"   
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632401224_NMS100-MOBILE.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632401178_NMSTEAM-MOBILE.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1633023120_Mobile_diagnostics-999.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1633023233_Mobile-Push_-consultaon-150.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1631893521_paytm.jpg"
    },
]
const Homecarousel=()=>
{
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
      });
    function useWindowSize() {
        useEffect(() => {
          
          function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          window.addEventListener("resize", handleResize);
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
        }, []); 
        return windowSize;
    }
    const size = useWindowSize();
    
    return(<div className="slider-container">
        <div className="carousel-wrapper">
        {size.width>900?<Carousel>
            {carouselDataDesktop.map((item)=>
            {
                return(<Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={item.carouselHomeImage}
                  alt="Slides"
                />
              </Carousel.Item>
              );
            })}
            </Carousel>
:<Carousel controls={false}>
{carouselDataResponsive.map((item)=>
{
    return(<Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={item.carouselHomeImage}
      alt="Slides"
    />
  </Carousel.Item>
  );
})}
</Carousel>
}
       </div>
    </div>);
}
export default Homecarousel;