import React, { useState,useEffect} from "react";
import {NavLink,Link} from "react-router-dom";
import { Menu, Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { logoutUserAction } from '../../actions/userActions'
import apiCollection from "../../api/api";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbartop.css";
import "./Navbarbottom.css";
import GlobalAlert from "../shared/Alert/Alert";
import MediLogo from "../../assets/medicine.png";
import productsCategorydata from "./product.json";
import {DropdownButton} from "react-bootstrap";
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
var defaultAvtar='https://www.linkpicture.com/q/avtar.png';

const Navbartop = (props) => {
    const { user } = props;
    const handleLogout = () => {
        props.dispatch(logoutUserAction())
    }
    const [items,setItems]=useState([])
    const getMedicines=()=>
    {
     apiCollection.getProduct()
    .then(response => {
     setItems(response.data)
    });
    };
    useEffect(() => {
            getMedicines();
    }, [items])
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <div>1st menu item</div>
          </Menu.Item>
          <Menu.Item key="1">
            <div>2nd menu item</div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" onClick={handleLogout}><div>Logout</div></Menu.Item>
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
               <SearchBar placeholder="Search for products" data={items}/>
            </div>
            <div className="icons-right">
                <div className="med-search-icon"><Link to='/searchpage'><SearchOutlinedIcon className="search-icon"/></Link>
                </div>
                 <div className="userlogin">
              {user ? <Dropdown overlay={menu} trigger={['click']}>
              <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {user.name} <DownOutlined />
              </div>
            </Dropdown>
                 :<NavLink to="/loginclient"><LockOpenOutlinedIcon className="userlogin-icon"/></NavLink>
                  }
                 </div>    
                 <div className="med-icon"><Link to="/cart"><ShoppingCartOutlinedIcon className="cart-icon"/></Link>
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
            <GlobalAlert/>
        </div>
    );
}
const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Navbartop);