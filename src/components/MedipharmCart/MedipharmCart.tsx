import React, { useState } from 'react';
import Navbartop from "../../components/Navbar/Navbartop";
import Emptycart from './Emptycart';
import Cart from './Cart';

import "./MedipharmCart.css";

const MedipharmCart = () => {
    const [cart,setCart]=useState(true)
  return <div>
      <div>
        <Navbartop/>
        </div>
        <div className='container-fluid p-0 mt-1 d-flex'>
            {cart?
            <div className='cart-background'>
             <Emptycart/>
            </div>:
            <div className='cart-container'>
                <Cart/>
            </div>
}
        </div>
  </div>;
};

export default MedipharmCart;
