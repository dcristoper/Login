import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataPrivate } from "../../API/ApiReq";
import "./Dashboard.scss";
import ContainerChat from "../../Component/Container/Chat/ContainerChat";

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
        if (token && token !== undefined) {
          return await getDataPrivate(config, token);
        }
        return navigate("/login");
      } catch (error) {
        localStorage.removeItem("authToken");
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
      <ContainerChat />
    </div>
  );
}

export default Private;
