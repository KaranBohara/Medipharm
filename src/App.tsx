import React,{createContext,useReducer} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Desktopfooter from "./components/Desktop_footer/Desktopfooter";
import Mobilefooter from "./components/Phone_footer_fixed/Mobilefooter";
import Homepage from "./pages/Homepage/Homepage";
import Searchpage from "./components/Search_space/Searchpage";
import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
import GenerateOTP from "./components/GenerateOTP/GenerateOTP";
import Resetpassword from "./components/Resetpassword/Resetpassword";
import Loginpage from "./pages/LoginClient/Loginpage";
import Signuppage from "./pages/Signupclient/Signuppage";
import AdminLogin from "./admin/components/AdminLogin";
import Dashboard from "./admin/components/Dashboard";
import ProtectedDashboardRoute from "./admin/ProtectedRoutes/ProtectedDashboardRoute";
import { reducer,initialState } from "./reducers/UseReducer";
import ProductsRoutes from "./pages/Products_pages/ProductsRoutes";
interface contextType
{
  state:boolean,
  dispatch:React.Dispatch<{ type: string; value: unknown }>;
}
export const UserContext = createContext<contextType | null>(null);
// https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames?page=4&pagesize=100

const App=()=> {
const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
      <Router>
        <Route path="/" exact>
          <Homepage />
          <Desktopfooter />
        </Route>
        <Route path="/product" component={ProductsRoutes}/>
        <Route exact path="/loginclient" component={Loginpage}/>
        <Route exact path="/forgotpassword" component={Forgotpassword}/>
        <Route exact path="/OTPgenerate" component={GenerateOTP}/>
        <Route exact path="/resetpassword" component={Resetpassword}/>
        <Route exact path="/signupclient" component={Signuppage}/>
        <Route exact path="/search" component={Searchpage}/>
        <ProtectedDashboardRoute path="/admin/dashboard" state={state} component={Dashboard}/>
        <Route exact path="/admin/login"component={AdminLogin}/>
        <Mobilefooter />
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
