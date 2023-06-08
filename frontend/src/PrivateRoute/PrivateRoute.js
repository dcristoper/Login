import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute() {
  const auth = localStorage.getItem("authToken");
  return !auth ? <Navigate to="/login" /> : <Outlet />;
}

export default PrivateRoute;
