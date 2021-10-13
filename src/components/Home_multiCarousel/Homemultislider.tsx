import "./Homemultislider.css";
import "../Home_slider/Homecarousel.css";
import Slickslider from "../Products_page/Category_multislider/Slickslider";
const multiSliderData1=[
    {
      carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632838405_Bold-care_mini-banner_web.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1629825345_Netmeds-ad-Kids-Vitty-Maxx-Aug-2021_436x224.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1632425922_Bajaj_web.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1633112517_home-page-mini-banner-web-436-224.jpg"
    },
    {
        carouselHomeImage:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1633005992_Mini-banner_web.jpg"
    },
]
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  draggable:true,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 784,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const Homemultislider=()=>
{
    return(
      <>
      <div className="home-headings">
      <h5 style={{width:"100%",fontWeight:"bold",textAlign:"left"}}>Today's Picks</h5>
      </div>
      <div className="row">
                    <div className="col-lg-12" style={{marginTop:"1rem"}}>
                        <Slickslider settings={settings} images={multiSliderData1}/>
                    </div>
                    </div>
        </>
    );
}
export default Homemultislider;