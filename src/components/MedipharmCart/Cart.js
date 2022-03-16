import React from 'react';
import {connect} from "react-redux";
import "./Cart.css";
// import { Input } from 'semantic-ui-react'
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';


const Cart = (props) => {
  const {cart}=props;
  const onChange=(value) =>{
    console.log('changed', value);
  }
  if(cart.items.length>0)
  localStorage.setItem('cartItem',JSON.stringify(cart.items))
  const getCart=JSON.parse(localStorage.getItem('cartItem'));
  return <div className='container-fluid'>
  <div className='row'>
  <div className='col-10 mt-3 mb-2 mx-auto head-label'>Shopping Cart</div>
  </div>
  <div className='row d-flex justify-content-center'>
  <div className='col-7 px-0'>
  {getCart && getCart.map((item,index)=>{
    const bestPrice = item[0].Price - ((item[0].Discount * item[0].Price) / 100);
    return(<div className='col-12 px-0' key={index}>
    <div className='row'>
    <div className='col-3 cart-image-box'><img alt={item[0].ProductName} src={item[0].Image}/></div>
    <div className='col-9 cart-item-box'>
    <div className='cart-product-name'>{item[0].ProductName}</div>
    <div className='cart-product-quantity'>Only {item[0].Quantity} items left in stock.</div>
    <div className='cart-product-price'>Rs.{bestPrice} <span className='cart-original-price'>Rs.{item[0].Price}</span></div>
    <div className='cart-quantity'><InputNumber addonBefore="QTY" min={1} max={10} defaultValue={1} className="cart-qty" onChange={onChange} /></div>
    </div>
    </div>
    <hr></hr>
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
