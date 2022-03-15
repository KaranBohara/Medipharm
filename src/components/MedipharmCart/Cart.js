import React from 'react';
import {connect} from "react-redux";

const Cart = (props) => {
  const {cart}=props;
  if(cart.items.length>0)
  localStorage.setItem('cartItem',JSON.stringify(cart.items))
  const getCart=JSON.parse(localStorage.getItem('cartItem'));
  console.log(getCart.length);
  return <div className='container-fluid'>
  <div className='row'>
  <div className='col-10 mt-3 mb-2 mx-auto head-label'>Shopping Cart</div>
  </div>
  <div className='row d-flex justify-content-center'>
  <div className='col-7 px-0'>
  {getCart && getCart.map((item,index)=>{
    return(<div className='col-12 border border-dark' key={index}>
      <h1>{item[0].ProductName}</h1>
      </div>)
    }
  )}
  </div>
  <div className='col-3'></div>
  </div> 
  </div>
};

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(Cart)
