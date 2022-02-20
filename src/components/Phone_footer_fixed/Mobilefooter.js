import React,{useEffect} from "react";
import "./Mobilefooter.css";
import {Link,useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Mobilefooter=({
  isAuthenticated,
})=>
{
  const history=useHistory();
  useEffect(() => {
  }, [isAuthenticated,history]);
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
            {!isAuthenticated?(<Link to="/loginclient" className="link-decoration-body"><div className="footer-content-icon">
            <i className="fas fa-user-circle" 
            style={{color:"#33aeb1",fontSize:"1.5rem"}}>
            </i></div>
            </Link>):(<Link to="/myaccount" className="link-decoration-body"><div className="footer-content-icon">
            <i className="fas fa-user-circle" 
            style={{color:"#33aeb1",fontSize:"1.5rem"}}>
            </i></div>
            </Link>)}
            </div>
    </div>);
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  isAuthenticated: state.userReducer.isAuthenticated,
});
export default connect(mapStateToProps)(Mobilefooter);
