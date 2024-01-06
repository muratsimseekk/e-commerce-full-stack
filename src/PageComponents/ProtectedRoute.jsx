import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
