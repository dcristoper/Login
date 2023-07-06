import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import MainApp from "../../Component/Container/Chat/MainApp";
import axiosPrivate from "../../API/axiosPrivate";

function Private() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
    const getPrivate = async () => {
      try {
        await axiosPrivate("api/auth/private");
      } catch (error) {
        navigate("/login");
        throw error;
      }
    };
    getPrivate();
  }, [navigate]);

  return (
    <div className="Wrapper-dashboard">
      <div className="bg-header"></div>
      <div className="main-app">
        <MainApp />
      </div>
    </div>
  );
}

export default Private;
