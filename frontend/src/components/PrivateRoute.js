// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const accessToken = localStorage.getItem("access_token");

  return accessToken ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
