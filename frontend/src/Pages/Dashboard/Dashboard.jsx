import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import ContainerChat from "../../Component/ContainerChat/ContainerChat";

function Private() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function capitalizeString(data) {
    let words = data.split(" ");
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let capitalizeddata = capitalizedWords.join(" ");
    return capitalizeddata;
  }

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
    const fetchPrivate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        const capitalName = await capitalizeString(data.username);
        setUsername(capitalName);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized, please login");
      }
    };
    fetchPrivate();
  }, [navigate]);

  return (
    <div className="Wrapper-dashboard">
      {error && <span>{error}</span>}
      <div className="bg-header"> </div>
      <ContainerChat username={username} />
    </div>
  );
}

export default Private;
