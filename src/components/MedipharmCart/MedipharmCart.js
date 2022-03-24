import React from 'react';
import {connect} from "react-redux";
import Navbartop from "../Navbar/Navbartop";
import Emptycart from './Emptycart';
import Cart from './Cart';
import "./MedipharmCart.css";
let getCart=false;

const MedipharmCart = () => {
  return <div>
      <div>
        <Navbartop/>
        </div>
        <div className='container-fluid p-0 mt-1 d-flex'>
            {getCart===undefined?
            <div className='cart-background'>
             <Emptycart/>
            </div>:
            <div className='col-12'>
                <Cart/>
            </div>
}
        </div>
  </div>
};


export default MedipharmCart ;
