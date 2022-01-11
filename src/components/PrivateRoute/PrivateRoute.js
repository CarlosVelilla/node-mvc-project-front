/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Navigate to="/sign-in" />
        );
      }}
    />
  );
};

export default PrivateRoute;
