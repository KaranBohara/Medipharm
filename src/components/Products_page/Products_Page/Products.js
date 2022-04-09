import React,{useEffect,useState} from "react";
import loadingImage from "../../../assets/loading.gif";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {connect} from "react-redux";
import { Tag} from 'antd';
import { getProductsRequest } from "../../../actions/productActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";
import {Link} from "react-router-dom";
let bestPrice = 0;
const Products = (props) => {
  const [wishlist,setWishlist]=useState(false)
  const handleWishlist=()=>
  {
    if(!wishlist)
    setWishlist(true)
    else
    setWishlist(false)
  }
  const {getProductsRequest,product}=props;
    useEffect(() => {
        getProductsRequest();
    }, [getProductsRequest]);
    return (<div className="col-12">{product.items.length>0?(<div className="products-container">
                {product.items.map((item, index) => {
                    bestPrice = Math.round(item.Price - ((item.Discount * item.Price) / 100));
                    return (                   
                            <div className="animate__animated animate__jackInTheBox product-box" key={index}>
                                <div className="discount-tab"><Tag color="#f50">{item.Discount}%OFF</Tag>
                                <FavoriteIcon className={`wishlist-product-icon ${wishlist?"wishlist-product-icon-after":""}`} onClick={handleWishlist}/>
                                </div>
                                <Link to={`/product/${item.Category}/${item.ProductName}/${item.PId}`} className="link-decoration-body" key={index}>
                                <div className="product-image-box"><img alt="product" src={item.Image}></img></div>
                                <div className="product-name">{item.ProductName}</div>
                                <div className="product-manufacturer">{item.Manufacturer}</div>
                                <div className="product-bestprice">Rs.{bestPrice}</div>
                                <div className="product-price">Rs.{Math.round(item.Price)}</div>
                                </Link>
                            </div>
                    );
                })}
            </div>):(<div className="loading-class"><img alt="loading" src={loadingImage} width="70%"/></div>)}
            </div>);
}
export default connect(
  ({ product }) => ({ product }),
  {
    getProductsRequest,
  }
)(Products);