import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Desktopfooter from './components/Desktop_footer/Desktopfooter';
import Navbartop from './components/Navbar/Navbartop';
import Mobilefooter from './components/Phone_footer_fixed/Mobilefooter';
import Login from "./components/Login/Login";
import Productspage from './pages/Products_pages/Productspage';
import Homepage from './pages/Homepage/Homepage';
import Searchpage from './components/Search_space/Searchpage';
import Signup from './components/signup/Signup';
// https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames?page=4&pagesize=100

function App() {
  return (
    <Router>
       <div className="App">    
        <Navbartop />
        <Route path="/" exact>
          <Homepage />
          <Desktopfooter/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/covidessentials">
          <Productspage />
        </Route>
        <Route path="/search">
          <Searchpage/>
        </Route>
        <Route path="/" exact>
        <Login/>
        </Route>
      <Mobilefooter />
      </div>
    </Router>
  );
}

export default App;
