import { Link } from "react-router-dom";
import "./Homecarousel.css";
import "bootstrap/dist/css/bootstrap.css";

const Homecarousel=(props)=>
{
 return (
     <div className='carousel-wrapper'>
      <div className='carousel-body '>
          <div className='carousel-main-heading'>
           {props.data.mainHeading}
          </div>
          <div className='carousel-sub-heading'>
          {props.data.subHeading}
          </div>
          <div className="carousel-button">
              <button><Link className='link-carousel' to='/search'>{props.data.button}</Link></button>
          </div>
      </div>
      <div className='carousel-image'>
      <img  src={props.data.imagePath} width={props.data.width} height={props.data.height} alt=""/>
      </div>
     </div>
    )
}
export default Homecarousel;