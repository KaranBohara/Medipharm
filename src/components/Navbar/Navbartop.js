import React from "react";
import {NavLink,Link} from "react-router-dom";
import { Menu, Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { logoutUserAction } from '../../actions/userActions'
import SearchBar from "../SearchBar/SearchBar";
import "./Navbartop.css";
import "./Navbarbottom.css";
import MediLogo from "../../assets/medicine.png";
import productsCategorydata from "./product.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// var defaultAvtar='https://www.linkpicture.com/q/avtar.png';
import defaultAvtar from "../../assets/profile.jpg";
let getCart

const Navbartop = (props) => {
    const { user,cart } = props;
    const handleLogout = () => {
        props.dispatch(logoutUserAction())
    }
    if(cart.items.length>0)
   getCart=JSON.parse(localStorage.getItem('cartItem'));
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <div><Link className="link-decoration-body" to="/myaccount">Your Account</Link></div>
          </Menu.Item>
          <Menu.Item key="1">
            <div><Link className="link-decoration-body" to="/myorders">Your Orders</Link></div>
          </Menu.Item>
          <Menu.Item key="2">
          <div><Link className="link-decoration-body" to="/myvouchers"></Link>Your Vouchers</div>
          </Menu.Item>
          <Menu.Item key="3">
          <div><Link className="link-decoration-body" to="/myvouchers"></Link>Saved Addresses</div>
          </Menu.Item>
          <Menu.Item key="4">
          <div><Link className="link-decoration-body" to="/myvouchers"></Link>Returns & Exchange</div>
          </Menu.Item>
          <Menu.Item key="5">
          <div><Link className="link-decoration-body" to="/passwordreset">Change Password</Link></div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="6" onClick={handleLogout}><div>Logout</div></Menu.Item>
        </Menu>
      );
    return (      
        <div>
        <div className="navbartop-container">
            <div className="brand-name" >
                <div className="brand-image"><Link to="/" ><img src={MediLogo} alt="brandlogo"></img></Link></div>
                <div className="brand-content">
                    <div className="brand-heading"><Link to="/" className="link-decoration">MediPharm</Link></div>
                </div>
            </div>
            
            <div className="search-container">
               <SearchBar placeholder="Search for products"/>
            </div>
            <div className="icons-right">
                <div className="med-search-icon"><Link to='/searchpage'><SearchOutlinedIcon className="search-icon"/></Link>
                </div>
                 <div className="userlogin">
              {user ? <Dropdown overlay={menu} trigger={['click']}>
              <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               <img src={defaultAvtar} alt='' width="60px" height="60px"/> {user.name} <KeyboardArrowDownIcon/><DownOutlined />
              </div>
            </Dropdown>
                 :<NavLink to="/loginclient"><LockOpenOutlinedIcon className="userlogin-icon"/></NavLink>
                  }
                 </div>    
                 <div className="med-cart-icon"><Link to="/cart"><ShoppingCartOutlinedIcon className="cart-icon"/>{getCart!=undefined?<div 
                  className="cart-number">{cart.items.length>getCart.length?cart.items.length:getCart.length}</div>:""}</Link>
                 </div>
                 <div className="med-icon"><Link to="/wishlist"><FavoriteBorderIcon className="wishlist-icon"/></Link>
                 </div>
            </div>
        </div>
            <div className="navbarbottom-container">
                <div className="navbar-box">
                    {productsCategorydata.map((data,index) => {
                        return (<div className="navbarbottom-items" key={index}>
                            <div className="navMenus"><Link to={data.path} className="link-decoration">{data.navTitle}</Link></div>
                            <div className="navIcons"><img alt="icon" src={data.mobilenavIcons}></img></div>
                            </div>);
                    })}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = ({ user,cart }) => ({ user,cart })
export default connect(mapStateToProps)(Navbartop);