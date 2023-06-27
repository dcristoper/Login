import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataPrivate } from "../../API/ApiReq";
import "./Dashboard.scss";
import MainApp from "../../Component/Container/Chat/MainApp";

function Private() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
    const fetchPrivate = async () => {
      try {
        const config = {
          method: "GET",
          endpoint: "/private",
        };
        if (!token) {
          return navigate("/login");
        }
        return await getDataPrivate(config, token);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("data");
        setError("You are not authorized, please login");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    };
    fetchPrivate();
  }, [navigate]);

  return (
    <div className="Wrapper-dashboard">
      {error && <span>{error}</span>}
      <div className="bg-header"></div>
      <div className="main-app">
        <MainApp />
      </div>
    </div>
  );
}

export default Private;
