import React from "react";
import "./Mobilefooter.css";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Mobilefooter=(props)=>
{
  const {user,product}=props;
    return(<div className="mobile-footer-container">
          <div className="footer-content-box" >
          <div className="footer-content-icon">
           <Link to="/"><HomeIcon className="home-icon" /></Link>
           </div>
            </div>
            <div className="footer-content-box" >
           <div className="footer-content-icon">
           <Link to="/cart"><AddShoppingCartIcon className="mobile-cart-icon"/></Link>
            <span className={product.addedItems.length>0?"cart-mobile-counter":''}>{product.addedItems.length?product.addedItems.length:''}</span>
            </div>
            </div>
            <div className="footer-content-box" >
            <div className="footer-content-icon">
            <Link to="/"><FavoriteIcon className="wishlist-icon"/></Link>
            </div>
            </div>
            <div className="footer-content-box" >
            <div className="footer-content-icon">
            <Link to="/"><i className="fal fa-badge-percent" style={{color:"red",fontSize:"1.5rem"}}></i> </Link></div>
            </div>
            <div className="footer-content-box" >
            <div className="footer-content-icon">
            <Link to={user?"/myaccount":"/loginclient"}><i className="fas fa-user-circle" 
            style={{color:"#33aeb1",fontSize:"1.5rem"}}>
            </i></Link></div>
            </div>
    </div>);
}

const mapStateToProps = ({ user,product }) => ({ user,product })

export default connect(mapStateToProps)(Mobilefooter);