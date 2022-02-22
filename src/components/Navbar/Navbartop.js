import React, { useState,useEffect} from "react";
import { connect } from 'react-redux';
import { logOutUser } from "../../redux/actions/action";
import {NavLink,Link,useHistory} from "react-router-dom";
import apiCollection from "../../api/api";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbartop.css";
import "./Navbarbottom.css";
import MediLogo from "../../assets/medicine.png";
import productsCategorydata from "./product.json";
import { DropdownButton} from "react-bootstrap";
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
var defaultAvtar='https://www.linkpicture.com/q/avtar.png';

const Navbartop = ({
    logOutUser,
    isAuthenticated,
}) => {
    const [items,setItems]=useState([])
    const history=useHistory();
    const userInfo=JSON.parse(localStorage.getItem('User'));
    const getMedicines=()=>
    {
     apiCollection.getProduct()
    .then(response => {
     setItems(response.data)
    });
    };
    useEffect(() => {
            getMedicines();
    }, [isAuthenticated,history,items]);
    const handleClick= ()=> {
        logOutUser();
        history.push('/loginclient')
    }
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
                 {(isAuthenticated) ? (<DropdownButton
                    title={userInfo?userInfo.name:''}
                    size="sm"
                    className="account-container"
                  >
                    <div className="account-wrap">
                    <div className="avtar">
                    <img alt={userInfo?userInfo.avtar?userInfo.avtar:defaultAvtar:''} src={userInfo?userInfo.avtar?userInfo.avtar:defaultAvtar:''} /> 
                    <div className="upload-container">
                    <LocalSeeOutlinedIcon className="upload-icon"/>
                    </div>
                    </div>
                    <div className="account-tab"><Link to='/myaccount' className="link-decoration-body">My Account</Link></div>
                    
                    <a href="" className="account-tab" onClick={handleClick}>Logout</a>
          
                    </div>
                  </DropdownButton>
                 ):
                 (<NavLink to="/loginclient"><LockOpenOutlinedIcon className="userlogin-icon"/></NavLink>)}
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
        </div>
    
    );
}
const mapDispatchToProps = {
    logOutUser: logOutUser,
};

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isAuthenticated: state.userReducer.isAuthenticated,
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbartop);