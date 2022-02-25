import React,{useEffect} from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import "../../styles/Dashboard.css";
import HomeAdmin from "./HomeAdmin";
import { Link,useHistory} from "react-router-dom";
import Medilogo from "../../assets/medicine.png";
import {Home,LocalMall,Phonelink,Settings,Person,} from "@material-ui/icons";
import { ToastContainer, toast, Zoom } from "react-toastify";
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from "@mui/icons-material/Logout";
import Customers from "../Customers";
import Orders from "../Orders";
import Reviews from "../Reviews";
import AccountSettings from "./AccountSettings";
import ProductsList from "../Product/ProductsList";

const Dashboard = () => {
    let user=JSON.parse(localStorage.getItem('userInfo'));
    useEffect(() => {
      toast.success(user.message)
    }, [user])
    const history=useHistory();
  const logOut=()=>
  {
    history.push('/admin/login');
    localStorage.clear(user);
  }
  return (
    <div className="admin-dashboard-page">
    <ToastContainer draggable={false} position="top-center" transition={Zoom} autoClose={3000} />
      <div className="admin-sidebar">
        <div className="admin-header">Admin Dashboard</div>
        <div className="admin-icons-list">
          <Link
            className="link-decoration icons-content-container"
            to="/admin/dashboard/home">
            <Home className="dashboard-icons" />
            <div className="icons-name">Home</div>
          </Link>
          <Link
            className="link-decoration icons-content-container"
            to="/admin/dashboard/products" >
            <Phonelink className="dashboard-icons" />
            <div className="icons-name">Products</div>
          </Link>
          <Link
            className="link-decoration icons-content-container"
            to="/admin/dashboard/customers" >
            <Person className="dashboard-icons" />
            <div className="icons-name">Customers</div>
          </Link>
          <Link
            className="link-decoration icons-content-container"
            to="/admin/dashboard/orders">
            <LocalMall className="dashboard-icons" />
            <div className="icons-name">Orders</div>
          </Link>
          <Link
          className="link-decoration icons-content-container"
          to="/admin/dashboard/reviews">
          <ReviewsIcon className="dashboard-icons" />
          <div className="icons-name">Reviews</div>
        </Link>
          <Link
            className="link-decoration icons-content-container"
            to="/admin/dashboard/settings">
            <Settings className="dashboard-icons" />
            <div className="icons-name">Settings</div>
          </Link>
          <div className="icons-content-container">
            <LogoutIcon className="dashboard-icons" onClick={logOut}/>
            <div className="icons-name" onClick={logOut}>Logout</div>
          </div>
        </div>
      </div>
      <div className="admin-wrapper">
        <div className="admin-menubar">
          <div className="admin-logo-container">
            <div className="admin-logo">
              <img src={Medilogo} alt="medilogo" height="40px" />{" "}
            </div>
            <div className="admin-logo-name">Medipharm</div>
          </div>
          <div className="admin-info">
            <div className="admin-pic">
              <img src={user.image} alt="admin-profile" height="60px" width="60px" />
            </div>
            <div className="admin-name">{user.name}</div>
          </div>
        </div>
        <div className="admin-content">
        <Switch>
        <Route path="/admin/dashboard" exact><HomeAdmin/></Route>
        <Route path="/admin/dashboard/home" exact><HomeAdmin/></Route>
        <Route path="/admin/dashboard/products" exact><ProductsList/></Route>
        <Route path="/admin/dashboard/customers" exact><Customers/></Route>
        <Route path="/admin/dashboard/orders" exact><Orders/></Route>
        <Route path="/admin/dashboard/reviews" exact><Reviews/></Route>
        <Route path="/admin/dashboard/settings" exact><AccountSettings/></Route>
      </Switch>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
