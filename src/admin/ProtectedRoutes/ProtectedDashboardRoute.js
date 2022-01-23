import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedDashboardRoute({state, component: Component, ...restOfProps }) {
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        state ? <Component {...props} /> : <Redirect to="/admin/login" />
      }
    />
  );
}

export default ProtectedDashboardRoute;