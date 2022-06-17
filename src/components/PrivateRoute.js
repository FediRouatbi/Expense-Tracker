import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { GetData } from "../context/AppContext";
const PrivateRoute = () => {
  const { currentUser } = GetData();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
