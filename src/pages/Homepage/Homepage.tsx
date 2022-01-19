import React, { useState } from "react";
import "./Homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homecarousel from "../../components/Home_slider/Homecarousel";
import Homemultislider from "../../components/Home_multiCarousel/Homemultislider";
import Shopbycategory from "../../components/Shop_by_category_products/Shopbycategory";
import Navbartop from "../../components/Navbar/Navbartop";
const Homepage=()=>
{
    return(<div className="container-fluid">
        <div className="row"><Navbartop/></div>
        <div className="row slider-container">
            <Homecarousel/>
        </div>
        <div className="row">
            <Shopbycategory/>
        </div>
        <div className="row slider-container">
            <Homemultislider/>
        </div>
    </div>);
}
export default Homepage;