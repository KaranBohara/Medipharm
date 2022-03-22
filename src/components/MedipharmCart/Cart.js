import React from 'react';
import {connect} from "react-redux";
import "./Cart.css";
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';
import AddIcon from '@mui/icons-material/Add';
import Checkout from './Checkout';
import { Button } from 'antd';
let getCart;


const Cart = (props) => {
  const {cart}=props;
  const onChange=(value) =>{
    console.log('changed', value);
  }
  if(cart.items.length>0)
  getCart=JSON.parse(localStorage.getItem('cartItem'));
  console.log(getCart);
  return <div className='container-fluid'>
  <div className='row'>
  <div className='col-lg-10 col-12 mt-3 mb-2 mx-auto head-label'>Shopping Cart</div>
  </div>
  <div className='row d-flex justify-content-center'>
  <div className='col-lg-7 col-12 px-0 cart-container'>
  {getCart && getCart.map((item,index)=>{
    const bestPrice = item[0].Price - ((item[0].Discount * item[0].Price) / 100);
    return(<div className='col-lg-12 col-11 mx-auto px-0' key={index}>
    <div className='row'>
    <div className='col-lg-3 col-12 cart-image-box'><img alt={item[0].ProductName} src={item[0].Image}/></div>
    <div className='col-lg-9 col-12 cart-item-box'>
    <div className='cart-product-name'>{item[0].ProductName}</div>
    <div className='cart-product-quantity'>Only {item[0].Quantity} items left in stock.</div>
    <div className='cart-product-price'>Rs.{bestPrice} <span className='cart-original-price'>Rs.{item[0].Price}</span></div>
    <div className='cart-quantity'><InputNumber addonBefore="QTY" min={1} max={10} defaultValue={1} className="cart-qty" onChange={onChange} />
    <Button className='remove-cart' type="primary" danger>Remove From Cart</Button>
    </div>
    </div>
    </div>
    <hr></hr>
      </div>)
    }
  )}
  <div className='col-lg-10 col-11 mx-auto add-more'>Add More Products <AddIcon className='add-icon'/></div>
  </div>
  <div className='col-lg-3 col-12 checkout-container'><Checkout/></div>
  </div> 
  </div>
};

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(Cart)
