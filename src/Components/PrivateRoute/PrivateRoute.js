import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let { user,isLoding } = useAuth();
  
    if(isLoding) {
      return <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-green-500"></div>
              </div>
    }
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
