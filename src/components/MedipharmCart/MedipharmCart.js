import React from 'react';
import {connect} from "react-redux";
import Navbartop from "../Navbar/Navbartop";
import Emptycart from './Emptycart';
import Cart from './Cart';
import "./MedipharmCart.css";

const MedipharmCart = (props) => {
  const { product } = props;
  return <div>
      <div>
        <Navbartop/>
        </div>
        <div className='container-fluid p-0 mt-1 d-flex'>
        {product.addedItems.length? <div className='col-12'><Cart/></div>:<div className='cart-background'><Emptycart/></div>}
        </div>
  </div>
};
export default connect(
  ({product }) => ({product })
)(MedipharmCart);

