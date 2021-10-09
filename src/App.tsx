import React from 'react';
import './App.css';
import Desktopfooter from './components/Desktop_footer/Desktopfooter';
import Homemultislider from './components/Home_multiCarousel/Homemultislider';
import Homecarousel from './components/Home_slider/Homecarousel';
import Navbartop from './components/Navbar/Navbartop';
import Mobilefooter from './components/Phone_footer_fixed/Mobilefooter';
import Shopbycategory from './components/Shop_by_category_products/Shopbycategory';
// https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames?page=4&pagesize=100

function App() {
  return (
    <div className="App">
  <Navbartop/>
  <Homecarousel/>
  <Shopbycategory/>
  <Homemultislider/>
  <Desktopfooter/>
  <Mobilefooter/>
    </div>
  );
}

export default App;
