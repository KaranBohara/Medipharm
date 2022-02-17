import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "./App.css";
import Mobilefooter from "./components/Phone_footer_fixed/Mobilefooter";
import Homepage from "./pages/Homepage/Homepage";
import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
import GenerateOTP from "./components/GenerateOTP/GenerateOTP";
import Resetpassword from "./components/Resetpassword/Resetpassword";
import Loginpage from "./pages/LoginClient/Loginpage";
import Signuppage from "./pages/Signupclient/Signuppage";
import AdminLogin from "./admin/components/AdminLogin";
import Dashboard from "./admin/components/Dashboard";
import ProductsRoutes from "./pages/Products_pages/ProductsRoutes";
import MedipharmCart from "./components/MedipharmCart/MedipharmCart";
import React, { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { setCurrentUser, logOutUser } from "./redux/actions/action";
import Account from "./components/account/Account";
// https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames?page=4&pagesize=100

const App=({
  setCurrentUser,
  logOutUser
})=> {
  useEffect(() => {
    if (localStorage.User) {
        const token = JSON.parse(localStorage.User).accessToken;
        setAuthToken(token);
        setCurrentUser(token);
    }
}, [setCurrentUser, logOutUser]);
  return (
    <div className="App">
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        className='message-toast'
    />
      <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/product" component={ProductsRoutes}/>
        <Route exact path="/loginclient" component={Loginpage}/>
        <Route exact path='/cart' component={MedipharmCart}/>
        <Route exact path="/forgotpassword" component={Forgotpassword}/>
        <Route exact path="/OTPgenerate" component={GenerateOTP}/>
        <Route exact path="/resetpassword" component={Resetpassword}/>
        <PrivateRoute exact path="/myaccount" component={Account} />
        <Route exact path="/signupclient" component={Signuppage}/>
        <Route path="/admin/dashboard" component={Dashboard}/>
        <Route exact path="/admin/login"component={AdminLogin}/>
        </Switch>
        <Mobilefooter />
      </Router>
    </div>
  );
}

const mapDispatchToProps = {
  logOutUser: logOutUser,
  setCurrentUser: setCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
