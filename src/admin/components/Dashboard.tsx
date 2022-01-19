import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import "../styles/Dashboard.css";
import ResponsiveDrawer from './ResponsiveDrawer';
import HomeAdmin from './HomeAdmin';
import Addproducts from './Addproducts';

const Dashboard=()=> {
    return (
        <Router>
        <div className='admin-dashboard'>
            <ResponsiveDrawer/>
            <Switch>
             <Route exact path="/admin/dashboard"><HomeAdmin/></Route>
              <Route exact path="/admin/dashboard/products"><Addproducts/></Route>
              </Switch>
        </div>
        </Router>
    )
}

export default Dashboard;
