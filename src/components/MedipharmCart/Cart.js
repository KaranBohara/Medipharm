import React from 'react';
import {connect} from "react-redux";
import "./Cart.css";
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';
import AddIcon from '@mui/icons-material/Add';
import Checkout from './Checkout';
import { Button } from 'antd';

const Cart = (props) => {
  const cartItem=props.product.addedItems
  const onChange=(value) =>{
    console.log('changed', value);
  }
  return <div className='container-fluid'>
  <div className='row'>
  <div className='col-lg-10 col-12 mt-3 mb-4 mx-auto head-label'>Shopping Cart</div>
  </div>
  <div className='row d-flex justify-content-center'>
  <div className='col-lg-7 col-12 px-0 cart-container'>
  {cartItem && cartItem.map((item,index)=>{
    const bestPrice = item.Price - ((item.Discount * item.Price) / 100);
    return(<div className='col-lg-12 col-11 mx-auto px-0' key={index}>
    <div className='row'>
    <div className='col-lg-3 col-12 cart-image-box'><img alt={item.ProductName} src={item.Image}/></div>
    <div className='col-lg-9 col-12 cart-item-box'>
    <div className='cart-product-name'>{item.ProductName}</div>
    <div className='cart-product-quantity'>Only {item.Quantity} items left in stock.</div>
    <div className='cart-product-price'>Rs.{bestPrice} <span className='cart-original-price'>Rs.{item.Price}</span></div>
    <div className='cart-quantity'><InputNumber addonBefore="QTY" min={1} max={10} value={item.quant} className="cart-qty" onChange={onChange} />
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

export default connect(
  ({product }) => ({product })
)(Cart);
