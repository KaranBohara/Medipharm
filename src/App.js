import { Route,Switch,Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Mobilefooter from "./components/Phone_footer_fixed/Mobilefooter";
import GlobalAlert from './components/shared/Alert/Alert'
import Homepage from "./pages/Homepage/Homepage";
import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
import GenerateOTP from "./components/GenerateOTP/GenerateOTP";
import Resetpassword from "./components/Resetpassword/Resetpassword";
import Loginpage from "./pages/LoginClient/Loginpage";
import Signuppage from "./pages/Signupclient/Signuppage";
import Searchpage from "./components/SearchPage/Searchpage";
import AdminLogin from "./admin/components/Login/AdminLogin";
import Dashboard from "./admin/components/AdminProfile/Dashboard";
import ProductsRoutes from "./pages/Products_pages/ProductsRoutes";
import MedipharmCart from "./components/MedipharmCart/MedipharmCart";
import Account from "./components/account/Account";
import Product from "./components/Products_page/Products_Page/Product";
// https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames?page=4&pagesize=100

const App=(props)=> {
  const {user}=props;
  return (
    <div className="App">
      <GlobalAlert/>
      <Switch>
        <Route path="/" exact render={() =>{return <Homepage/> }}/>
        <Route path="/products" component={ProductsRoutes}/>
        <Route exact path="/loginclient" render={()=>{return user?<Redirect to='/'/>:<Loginpage/>}}/>
        <Route exact path='/cart' component={MedipharmCart}/>
        <Route exact path="/forgotpassword" component={Forgotpassword}/>
        <Route exact path="/OTPgenerate" component={GenerateOTP}/>
        <Route exact path="/resetpassword" component={Resetpassword}/>
        <Route exact path="/myaccount" render={()=>{return user?<Account/>:<Redirect to='/loginclient'/>}} />
        <Route exact path='/searchpage' component={Searchpage}/>
        <Route exact path="/signupclient" render={()=>{return user?<Redirect to='/'/>:<Signuppage/>}}/>
        <Route exact path="/product/:category/:product/:pid" component={Product}/>
        <Route path="/admin/dashboard" component={Dashboard}/>
        <Route exact path="/admin/login"component={AdminLogin}/>
        </Switch>
        <Mobilefooter />
    </div>
  );
}
const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(App)
