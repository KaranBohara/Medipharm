import React,{useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Desktopfooter from "./components/Desktop_footer/Desktopfooter";
import Mobilefooter from "./components/Phone_footer_fixed/Mobilefooter";
import Productspage from "./pages/Products_pages/Productspage";
import Homepage from "./pages/Homepage/Homepage";
import Searchpage from "./components/Search_space/Searchpage";
import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
import GenerateOTP from "./components/GenerateOTP/GenerateOTP";
import Resetpassword from "./components/Resetpassword/Resetpassword";
import Loginpage from "./pages/LoginClient/Loginpage";
import Signuppage from "./pages/Signupclient/Signuppage";
// https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames?page=4&pagesize=100

const App=()=> {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Homepage />
          <Desktopfooter />
        </Route>
        <Route exact path="/loginclient">
          <Loginpage />
        </Route>
        <Route exact path="/forgotpassword">
          <Forgotpassword />
        </Route>
        <Route exact path="/OTPgenerate">
          <GenerateOTP />
        </Route>
        <Route exact path="/resetpassword">
          <Resetpassword />
        </Route>
        <Route exact path="/signupclient">
          <Signuppage />
        </Route>
        <Route exact path="/covidessentials">
          <Productspage />
        </Route>
        <Route exact path="/search">
          <Searchpage />
        </Route>
        {/* <Mobilefooter /> */}
      </Router>
    </div>
  );
}

export default App;
