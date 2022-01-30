import React from "react";
import {Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categoriessidebar from "../../components/Products_page/Categories_component/Categoriessidebar";
import Filtertaskbar from "../../components/Products_page/Filter_component/Filtertaskbar";
import "./Productspage.css";
import Mobilefilter from "../../components/MobileFilter/Mobilefilter";
import Categoryslider from "../../components/Products_page/Category_multislider/Categoryslider";
import Navbartop from "../../components/Navbar/Navbartop";
import CovidEssentials from "./CovidEssentials";
import Eyewear from "./Eyewear";
import Ayush from "./Ayush";
import Fitness from "./Fitness";
import MomBaby from "./MomBaby";
import Devices from "./Devices";
import Surgicals from "./Surgicals";
import Treatment from "./Treatment";

const ProductsRoutes = () => {
  return(<div>
        <div>
        <Navbartop/>
        </div>
        <div className="container-fluid hide-component">
        <Categoryslider />
        </div>
        <div className="container-fluid filter-position">
        <Mobilefilter/>  
        </div>
        <div className="container-fluid d-flex justify-content-center">
        <div className="side-section">
                    <div className=" show-component">
                        <Categoriessidebar />
                    </div>
                    <div className=" show-component">
                        <Filtertaskbar />
                    </div>
        </div>
        <div>
        <Switch>
        <Route path="/product" exact><CovidEssentials/></Route>
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
  </div>);
};

export default ProductsRoutes;
