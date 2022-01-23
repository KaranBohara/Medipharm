import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedLoginRoute({state, component: Component, ...restOfProps }) {
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        state ?<Redirect to="/admin/dashboard" />:<Component {...props} />
      }
    />
  );
}

export default ProtectedLoginRoute;