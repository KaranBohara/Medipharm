import React from "react";
import "./Mobilefooter.css";
import {Link,useHistory} from "react-router-dom";
import { connect } from 'react-redux'
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Mobilefooter=(props)=>
{
  const {user}=props;
  const history=useHistory();
    return(<div className="mobile-footer-container">
          <div className="footer-content-box" >
          <Link to="/" className="link-decoration-body"><div className="footer-content-icon">
           <HomeIcon className="home-icon" />
           </div>
            </Link>
            </div>
            <div className="footer-content-box" >
            <Link to="/cart" className="link-decoration-body"><div className="footer-content-icon">
            <AddShoppingCartIcon/>
            </div>
            </Link>
            </div>
            <div className="footer-content-box" >
            <Link to="/" className="link-decoration-body">
            <div className="footer-content-icon">
            <FavoriteIcon className="wishlist-icon"/>
            </div>
            </Link>
            </div>
            <div className="footer-content-box" >
            <Link to="/" className="link-decoration-body">
            <div className="footer-content-icon"><i className="fal fa-badge-percent" style={{color:"red",fontSize:"1.5rem"}}></i></div>
            </Link>
            </div>
            <div className="footer-content-box" >
            <Link to={user?"/myaccount":"/loginclient"} className="link-decoration-body"><div className="footer-content-icon">
            <i className="fas fa-user-circle" 
            style={{color:"#33aeb1",fontSize:"1.5rem"}}>
            </i></div>
            </Link>
            </div>
    </div>);
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Mobilefooter);