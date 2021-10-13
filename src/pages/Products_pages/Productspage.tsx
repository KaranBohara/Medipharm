import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Categoriessidebar from "../../components/Products_page/Categories_component/Categoriessidebar";
import Products from "../../components/Products_page/Products_Page/Products";
import Filtertaskbar from "../../components/Products_page/Filter_component/Filtertaskbar";
import "./Productspage.css";
import Mobilefilter from "../../components/MobileFilter/Mobilefilter";
import Categoryslider from "../../components/Products_page/Category_multislider/Categoryslider";
import {carouselDataDesktop, carouselDataResponsive } from "../../components/Home_slider/Homecarousel";
import Slickslider from "../../components/Products_page/Category_multislider/Slickslider";
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable:true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
  };
const Productspage = () => {
    return (<div className="container-fluid product-page-wrapper">
        <div className="row">
            <div className="col-lg-12 hide-component">
                <Categoryslider />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <div className="row">
                    <div className="col-lg-12 show-component">
                        <Categoriessidebar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 show-component">
                        <Filtertaskbar />
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:"1rem"}}>
                        <Slickslider settings={settings} images={carouselDataDesktop}/>
                    </div>
                    <div className="col-lg-12">
                        <Products />
                    </div>
                </div>

            </div>
        </div>
        <div className="row filter-position">
            <div className="col-lg-12">
                <Mobilefilter />
            </div>
        </div>
    </div>);
}
export default Productspage;