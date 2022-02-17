import React, { useState,useEffect} from "react";
import { connect } from 'react-redux';
import { logOutUser } from "../../redux/actions/action";
import {NavLink,Link,useHistory} from "react-router-dom";
import apiCollection from "../../api/api";
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
let filteredItems=[];
const Navbartop = ({
    logOutUser,
    isAuthenticated,
}) => {
    const history=useHistory();
    const [search,setSearch]=useState('');
    let [items,setItems]=useState([]);
    const userInfo=JSON.parse(localStorage.getItem('User'));
    const getMedicines=()=>
    {
     apiCollection.getProduct()
    .then(response => {
     setItems(response.data)
     filteredItems=items.filter(item=>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
});
    };
    useEffect(() => {
        if(search.length>0)
        {
            getMedicines();
        }
    }, [isAuthenticated,history,search]);
    const handleClick= ()=> {
        logOutUser();
        history.push('/loginclient')
    }
    const [mobileSearch,setmobileSearch]=useState(true);
    const handleInput=()=>
    {
        setmobileSearch(false);
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
                <div className="location"><i className="fas fa-location"></i></div>
                <div className="search-box">
                    <input type="search" onChange={(e)=>{
                       setSearch(e.target.value)
                    }} placeholder="Search here..."></input>
                </div>
                <div className="searchspace-container" style={search!==''?{display:"flex"}:{display:"none"}}>
                {filteredItems?filteredItems.map((item,index)=>
                    {
                        return( <div className="output-container" key={index}>
                <div className="output-container-image"><img src={item.imageURL} alt='' width="150px" height="120px"/></div>
                <div className="output-container-body">{item.name}</div>
                </div>)
                    }):"Loading"}
                </div>
            </div>
            <div className="icons-right">
                <div className="med-search-icon"><SearchOutlinedIcon onClick={handleInput} className="search-icon"/></div>
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
            <div className={!mobileSearch?"mobile-search-box":""}>
            <div className="search-box">
                    <input type="search" onChange={(e)=>{
                       setSearch(e.target.value)
                    }} placeholder="Search here..."></input>
                </div>
                <div className="searchspace-container" style={search!==''?{display:"flex"}:{display:"none"}}>
                {filteredItems?filteredItems.map((item,index)=>
                    {
                        return( <div className="output-container" key={index}>
                <div className="output-container-image"><img src={item.imageURL} alt='' width="150px" height="120px"/></div>
                <div className="output-container-body">{item.name}</div>
                </div>)
                    }):"Loading"}
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