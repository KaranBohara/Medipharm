import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Shopbycategory.css";
import productsCategorydata from "../Navbar/product.json"
const Shopbycategory=()=>
{
    return(<>
     <div className="home-headings"><h5 style={{width:"93%",fontWeight:"bold",textAlign:"left"}}>Shop By Category</h5></div>
       <div className="container-fluid d-flex justify-content-center">
       <div className="row row-style">
        {productsCategorydata.map((item:any)=>{
            return(<div className="col-lg-3 col-md-4 col-sm-6 category-box-spacing">
                <div className="shop-by-category-wrapper">
            <div className="shop-by-category-imagebox"><img src={item.navImage} width="40%" alt="Category"></img></div>
            <div className="shop-by-category-titlebox"> {item.navTitle}</div>
            </div>
        </div>);
        })}
       </div>
       </div>
    </>);
}
export default Shopbycategory;