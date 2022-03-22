import React from 'react';
import {connect} from "react-redux";
import Navbartop from "../Navbar/Navbartop";
import Emptycart from './Emptycart';
import Cart from './Cart';
import "./MedipharmCart.css";
let getCart;

const MedipharmCart = (props) => {
  const {cart}=props;
  if(cart.items.length>0)
   getCart=JSON.parse(localStorage.getItem('cartItem'));
   console.log(getCart);

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

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(MedipharmCart) ;
