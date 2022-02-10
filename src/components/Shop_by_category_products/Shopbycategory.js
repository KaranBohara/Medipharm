import React from "react";
import {
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Shopbycategory.css";
import productsCategorydata from "../Navbar/product.json"
const Shopbycategory=()=>
{
    return(<>
     <div className="home-headings">Shop By Category</div>
       <div className="container-fluid d-flex justify-content-center">
       <div className="row row-style">
        {productsCategorydata.map((item,index)=>{
            return(<div className="col-lg-3 col-md-4 col-sm-6 category-box-spacing" key={index}>
                <div className="shop-by-category-wrapper" key={index}>
            <div className="shop-by-category-imagebox"><img src={item.navImage} width="40%" alt="Category"></img></div>
            <div className="shop-by-category-titlebox"><Link to={item.path} className="link-decoration-body">{item.navTitle}</Link></div>
            </div>
        </div>);
        })}
       </div>
       </div>
    </>);
}
export default Shopbycategory;