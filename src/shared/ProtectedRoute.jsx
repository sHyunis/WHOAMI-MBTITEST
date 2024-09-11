import React from "react";
import { Navigate } from "react-router-dom";
import useBearsStore from "../zustand/bearsStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useBearsStore((state) => ({
    user: state.user,
  }));
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
