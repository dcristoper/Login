import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Private() {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
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
        setUsername(data.username);
        setPrivateData(data.msg);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized, please login");
      }
    };
    fetchPrivate();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return error ? (
    <span>{error}</span>
  ) : (
    <>
      {" "}
      <div className="hei">{privateData}</div>{" "}
      <button onClick={logout}>Log out</button>
      <p>Hallo {username}</p>
    </>
  );
}

export default Private;
