import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Productspage.css";
import Products from "../../components/Products_page/Products_Page/Products";


const CovidEssentials = () => {
    return (<div>
          <div className="products-wrap">
        <Products />
        </div>
    </div>
    );
}
export default CovidEssentials;