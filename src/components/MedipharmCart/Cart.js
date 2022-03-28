import React from 'react';
import {connect} from "react-redux";
import "./Cart.css";
import 'antd/dist/antd.css';
import { Input} from 'antd';
import AddIcon from '@mui/icons-material/Add';
import { removeItem,increaseQuantity,decreaseQuantity } from '../../actions/productActions';
import Checkout from './Checkout';
import { Button } from 'antd';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = (props) => {
  const {removeItem,increaseQuantity,decreaseQuantity}=props;
  const cartItem=props.product.addedItems;
  const onChange=(value) =>{
    console.log('changed', value);
  }
  const handleDecrease=(id)=>
  {
    decreaseQuantity(id)
  }
  const handleIncrease=(id)=>
  {
    increaseQuantity(id)
  }
  return <div className='container-fluid'>
  <div className='row'>
  <div className='col-lg-10 col-11 mx-auto cart-label-head'>Shopping Cart</div>
  </div>
  <div className='row d-flex justify-content-center'>
  <div className='col-lg-7 col-12 px-0 cart-container'>
  {cartItem && cartItem.map((item,index)=>{
    const bestPrice = Math.round(item.Price - ((item.Discount * item.Price) / 100));
    return(<div className='col-lg-12 col-11 mx-auto px-0' key={index}>
    <div className='row'>
    <div className='col-lg-3 col-12 cart-image-box'><img alt={item.ProductName} src={item.Image}/></div>
    <div className='col-lg-9 col-12 cart-item-box'>
    <div className='cart-product-name'>{item.ProductName}</div>
    <div className='cart-product-quantity'>Only {item.Quantity} items left in stock.</div>
    <div className='cart-product-price'>Rs.{bestPrice*item.quant} <span className='cart-original-price'>Rs.{Math.round(item.Price)}</span></div>
    <div className='cart-quantity-wrap'>
    <div className='cart-quantity'>
    <div className='decrement'><RemoveIcon onClick={()=>handleDecrease(item.PId)}/></div>
    <Input value={item.quant} className="cart-qty" onChange={onChange} />
    <div className='increment'><AddIcon onClick={()=>{handleIncrease(item.PId)}}/></div>
    </div>
    <Button className='remove-cart' type="primary" onClick={()=>removeItem(item.PId)}>Remove From Cart</Button>
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
  ({product }) => ({product }),
  {
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  }
)(Cart);
