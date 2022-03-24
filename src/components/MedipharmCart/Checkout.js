import React from 'react';
import "./Checkout.css";
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {connect} from "react-redux";

const Checkout = (props) => {
  const subtotal=props.product.total;
  const gst=(5*subtotal)/100;
  const shippingCharges=50;
  return (
    <div className='checkout-box'>
    <div className='col-12 px-3 small-head mb-2 mt-2'>Payment Details</div>
    <div className='col-12 px-3'>
    <div className='row mb-2'>
    <div className='col-7 price-head'>Subtotal</div>
    <div className='col-5 amount-head'>Rs.{subtotal}</div>
    </div>
    <div className='row mb-2'>
    <div className='col-7 price-head'>GST</div>
    <div className='col-5 amount-head'>Rs.{gst}</div>
    </div>
    <div className='row mb-2'>
    <div className='col-7 price-head'>Shipping Charges</div>
    <div className='col-5 amount-head'>Rs.{shippingCharges}</div>
    </div>
    <div className='row mb-2'>
    <div className='col-7 price-head'><b>Total</b></div>
    <div className='col-5 amount-head'><b>Rs.{subtotal+gst+shippingCharges}</b></div>
    </div>
    </div>
    <div className='col-12 px-3 mb-3 mt-3'>
    <div className='row'>
    <div className='col-6 text-primary promocode-head'>Apply Promocode</div>
    <div className='col-6 amount-head'><DownOutlined className='carret-down-icon' /></div>
    </div>
    </div>
    <div className='col-12 px-3'> <Button type="primary" block>
    Apply Promocode
    </Button></div>
    </div>
  )
}
export default connect(
  ({product }) => ({product })
)(Checkout);