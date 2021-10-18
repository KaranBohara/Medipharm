import React, { useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbartop.css";
import "./Navbarbottom.css";
import MediLogo from "../../assets/medicine.png";
import productsCategorydata from "./product.json";
import Searchpage from "../Search_space/Searchpage";
const Navbartop = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [search,setSearch]=useState('');
    // const [mobileSearch,setmobileSearch]=useState(false);

    return (
        
        <><div className="navbartop-container">
            <div className="hamburger-icon" onClick={() => { setShowNavbar(!showNavbar) }}>
                <i className={showNavbar ? "fas fa-times" : "fas fa-bars"}></i></div>
            <div className="brand-name" >
                <div className="brand-image"><Link to="/" onClick={() => { setShowNavbar(false) }}><img src={MediLogo} alt="brandlogo"></img></Link></div>
                <div className="brand-content">
                    <div className="brand-heading"><Link to="/" onClick={() => { setShowNavbar(false) }} className="link-decoration">MediPharm</Link></div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="location"><i className="fas fa-location"></i></div>
                <div className="search-box">
                    <input type="search" onChange={(e)=>{
                       setSearch(e.target.value)
                    }} placeholder="Search here..."></input>
                </div>
                <div className="searchspace-container" style={search!==''?{display:"flex"}:{display:"none"}}><Searchpage/></div>
            </div>
            <div className="icons-right">
                <div className="search-icon"><Link to="/search"><i className="fas fa-search"></i></Link></div>
                <Link to="/login"> <div className="userlogin"><i className="fas fa-user"></i></div></Link>
                <div className="cart"><i className="fas fa-cart-plus"></i></div>
                <div className="rxupload"><i className="fas fa-upload"></i></div>
            </div>
        </div>
            <div className="navbarbottom-container">
                <div className="navbar-box" id={showNavbar ? "hidden" : "open"}>
                    {productsCategorydata.map((data:{navTitle:string,navImage:string,path:string,mobilenavIcons:string},index:number) => {
                        return (<div className="navbarbottom-items" key={index}>
                            <div className="navMenus"><Link to={data.path} onClick={() => { setShowNavbar(false) }}className="link-decoration">{data.navTitle}</Link></div>
                            <div className="navIcons"><img src={data.mobilenavIcons}></img></div>
                            </div>);
                    })}
                </div>
            </div>
        </>
    
    );
}
export default Navbartop;