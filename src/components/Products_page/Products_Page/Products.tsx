import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";
import Medicines from "../Filter_component/medicines.json";
let bestPrice = 0;
const Products = () => {
    return (<div className="products-container">
                {Medicines.map((item, index) => {
                    bestPrice = item.Price - ((item.Discount * item.Price) / 100);
                    return (                   
                            <div className="product-box" key={index}>
                                <div className="discount-tab"><span style={{backgroundColor:"green",padding:".2rem",borderRadius:".2rem"}}>{item.Discount}%OFF</span></div>
                                <div className="product-image-box"><img src={item.src}></img></div>
                                <div className="product-name">{item.MedicineName}</div>
                                <div className="product-manufacturer">{item.Manufacturers}</div>
                                <div className="product-bestprice">Rs.{bestPrice}</div>
                                <div className="product-price">Rs.{item.Price}</div>
                                <div className="cart-button"><button type="submit">ADD TO CART</button></div>
                            </div>
                    );
                })}
            </div>);
}
export default Products;