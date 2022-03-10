import React,{useEffect,useState} from 'react';
import apiCollection from '../../../api/api.js';
import Navbartop from "../../Navbar/Navbartop.js";
import ReactImageMagnify from "react-image-magnify";
import "./Product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const params=useParams();
  const [medicine, setMedicine] = useState([]);
  const getMedicines=()=>
  {
   apiCollection.getProductById(params.pid)
  .then(response => {
   const myMed=response.data.data;
   setMedicine(myMed);
});
  };
  useEffect(() => {
    getMedicines();
}, [medicine]);
  return (
      <div>
      <div><Navbartop/></div>
      <div className='container-fluid mt-5'>
      <div className='row'>
      <div className='col-lg-10 mx-auto py-2 breadcrumbs-container'>
      <span>Home /</span><span>{params.category} /</span><span>{params.product}</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-10 mx-auto py-2 breadcrumbs-container'>
      <div className='col-4 product-large-image'>
      {medicine.map((item,index)=>{
        const props = {width: 400, height: 250, zoomWidth: 500, img:item.Image};
        return( <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: item.Image,
              sizes:
                "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw"
            },
            largeImage: {
              alt: "",
              src: item.Image,
              width: 700,
              height: 700
            },
            isHintEnabled: true
          }}
        />)
      })}
      </div>
      </div>
      </div>
      </div>
      </div>
    
  )
}

export default Product