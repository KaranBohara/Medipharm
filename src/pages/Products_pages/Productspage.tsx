import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Categoriessidebar from "../../components/Products_page/Categories_component/Categoriessidebar";
import Products from "../../components/Products_page/Products_Page/Products";
import Filtertaskbar from "../../components/Products_page/Filter_component/Filtertaskbar";
import "./Productspage.css";
const Productspage = () => {
    return (<div className="container-fluid" style={{marginTop:"2rem"}}>
        <div className="row">
            <div className="col-md-3" style={{backgroundColor:"rgb(228, 228, 228)"}}>
                <div className="row">
                    <div className="col-md-12">
                        <Categoriessidebar/>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                   <Filtertaskbar/>
                    </div>
                </div>
            </div>
            <div className="col-md-9" style={{backgroundColor:"rgb(228, 228, 228)"}}>
                <Products />
            </div>
        </div>
    </div>);
}
export default Productspage;