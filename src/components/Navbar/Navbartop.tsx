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
const Navbartop = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        
        <><div className="navbartop-container">
            <div className="hamburger-icon" onClick={() => { setShowNavbar(!showNavbar) }}>
                <i className={showNavbar ? "fas fa-times" : "fas fa-bars"}></i></div>
            <div className="brand-name" >
                <div className="brand-image"><Link to="/"><img src={MediLogo} alt="brandlogo"></img></Link></div>
                <div className="brand-content">
                    <div className="brand-heading"><Link to="/" className="link-decoration">MediPharm</Link></div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="location"><i className="fas fa-location"></i></div>
                <div className="search-box">
                    <input type="search" placeholder="Search here..."></input>
                </div>
            </div>
            <div className="icons-right">
                <div className="search-icon"><i className="fas fa-search"></i></div>
                <Link to="/login"> <div className="userlogin"><i className="fas fa-user"></i></div></Link>
                <div className="cart"><i className="fas fa-cart-plus"></i></div>
                <div className="rxupload"><i className="fas fa-upload"></i></div>
            </div>
        </div>
            <div className="navbarbottom-container">
                <div className="navbar-box" id={showNavbar ? "hidden" : "open"}>
                    {productsCategorydata.map((data:{navTitle:string,navImage:string,path:string,mobilenavIcons:string},key:number) => {
                        return (<div className="navbarbottom-items" key={key}>
                            <div className="navMenus"><Link to={data.path} className="link-decoration">{data.navTitle}</Link></div>
                            <div className="navIcons"><img src={data.mobilenavIcons}></img></div>
                            </div>);
                    })}
                </div>
            </div>
        </>
    
    );
}
export default Navbartop;