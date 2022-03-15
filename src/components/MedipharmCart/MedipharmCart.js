import React, { useState } from 'react';
import Navbartop from "../Navbar/Navbartop";
import Emptycart from './Emptycart';
import Cart from './Cart';

import "./MedipharmCart.css";

const MedipharmCart = () => {
    const [cart,setCart]=useState(false)
    const handleCart=()=>
    {
      setCart(false)
    }
  return <div>
      <div>
        <Navbartop/>
        </div>
        <div className='container-fluid p-0 mt-1 d-flex'>
            {cart?
            <div onClick={handleCart} className='cart-background'>
             <Emptycart/>
            </div>:
            <div className='col-12'>
                <Cart/>
            </div>
}
        </div>
  </div>
};

export default MedipharmCart;
