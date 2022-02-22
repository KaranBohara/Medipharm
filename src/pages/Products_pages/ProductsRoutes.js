import React from "react";
import {Route,Switch} from 'react-router-dom';
// import Categoriessidebar from "../../components/Products_page/Categories_component/Categoriessidebar";
import Filtertaskbar from "../../components/Products_page/Filter_component/Filtertaskbar";
import "./Productspage.css";
import Mobilefilter from "../../components/MobileFilter/Mobilefilter";
import Navbartop from "../../components/Navbar/Navbartop";
import CovidEssentials from "./CovidEssentials";
import Eyewear from "./Eyewear";
import Ayush from "./Ayush";
import Fitness from "./Fitness";
import MomBaby from "./MomBaby";
import Devices from "./Devices";
import Surgicals from "./Surgicals";
import Treatment from "./Treatment";
import Desktopfooter from "../../components/Desktop_footer/Desktopfooter";
import Location from "../../components/Location/Location";

const ProductsRoutes = () => {
  return(<div>
        <div>
        <Navbartop/>
        </div>
        <div className="hide-component">
        <div className="sub-div1"><Location/></div>
        <div className="sub-div2"><Mobilefilter/></div>
        </div>
        <div className="product-filter">
        <Filtertaskbar/>
        <div className="product-section">
        <Switch>
        <Route path="/product" exact component={CovidEssentials}/>
        <Route path="/product/eyewear" component={Eyewear}/>
        <Route path="/product/ayush" component={Ayush}/>
        <Route path="/product/fitness" component={Fitness}/>
        <Route path="/product/mombaby" component={MomBaby}/>
        <Route path="/product/devices" component={Devices}/>
        <Route path="/product/surgicals" component={Surgicals}/>
        <Route path="/product/treatment" component={Treatment}/>
        </Switch>
        </div>
        </div>
        <div>
        <Desktopfooter/>
        </div>
  </div>);
};

export default ProductsRoutes;
