import React from "react";
import { Navigate } from "react-router";
import { isAuthenticated } from "../utils/auth";

export const PrivateRouter = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};
