import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Desktopfooter from './components/Desktop_footer/Desktopfooter';
import Homemultislider from './components/Home_multiCarousel/Homemultislider';
import Homecarousel from './components/Home_slider/Homecarousel';
import Navbartop from './components/Navbar/Navbartop';
import Mobilefooter from './components/Phone_footer_fixed/Mobilefooter';
import Shopbycategory from './components/Shop_by_category_products/Shopbycategory';
import Login from "./components/Login/Login";
import Productspage from './pages/Products_pages/Productspage';
// https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames?page=4&pagesize=100

function App() {
  return (
    <Router>
    <div className="App">
  <Navbartop/>
    <Route path="/" exact>
  <Homecarousel/>
  <Shopbycategory/>
  <Homemultislider/>
  <Desktopfooter/>
  <Mobilefooter/>
  </Route>
  <Route path="/login">
    <Login/>
    </Route>
    <Route path="/covidessentials">
     <Productspage/>
    </Route>
  {/* <Login/> */}
    </div>
    </Router>
  );
}

export default App;
