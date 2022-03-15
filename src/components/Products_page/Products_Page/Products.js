import React,{useEffect} from "react";
import loadingImage from "../../../assets/loading.gif"
import {connect} from "react-redux";
import { getProductsRequest } from "../../../actions/productActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";
import {Link} from "react-router-dom";
import { Button } from 'antd';
let bestPrice = 0;
const Products = (props) => {
  const {getProductsRequest,product}=props;
    useEffect(() => {
        getProductsRequest();
    }, [getProductsRequest]);
    return (<div className="col-12">{product.items.length>0?(<div className="products-container">
                {product.items.map((item, index) => {
                    bestPrice = item.Price - ((item.Discount * item.Price) / 100);
                    return (      <Link to={`/product/${item.Category}/${item.ProductName}/${item.PId}`} className="link-decoration-body" key={index}>             
                            <div className="animate__animated animate__jackInTheBox product-box">
                                <div className="discount-tab"><span style={{backgroundColor:"green",padding:".2rem",borderRadius:".2rem"}}>{item.Discount}%OFF</span></div>
                                <div className="product-image-box"><img alt="product" src={item.Image}></img></div>
                                <div className="product-name">{item.ProductName}</div>
                                <div className="product-manufacturer">{item.Manufacturer}</div>
                                <div className="product-bestprice">Rs.{bestPrice}</div>
                                <div className="product-price">Rs.{item.Price}</div>
                            </div>
                            </Link>
                    );
                })}
            </div>):(<div className="loading-class"><img src={loadingImage} width="70%"/></div>)}
            </div>);
}
export default connect(
  ({ product }) => ({ product }),
  {
    getProductsRequest,
  }
)(Products);