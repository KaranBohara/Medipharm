import "./Homecarousel.css";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';

const Homecarousel=(props:any)=>
{
 return (
     <div className='carousel-wrapper'>
      <div className='carousel-body animate__animated animate__zoomInLeft'>
          <div className='carousel-main-heading'>
           {props.data.mainHeading}
          </div>
          <div className='carousel-sub-heading'>
          {props.data.subHeading}
          </div>
          <div className="carousel-button">
              <button>{props.data.button}</button>
          </div>
      </div>
      <div className='carousel-image'>
      <img className='animate__animated animate__fadeInRight' src={props.data.imagePath} width={props.data.width} height={props.data.height} alt=""/>
      </div>
     </div>
    )
}
export default Homecarousel;