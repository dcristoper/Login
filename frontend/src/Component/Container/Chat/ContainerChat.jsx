import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContainerChat.scss";
import imgProfile from "../../../Assets/profilePict.png";
import BoxMenu from "../../LeftViewChat/BoxMenu";
import BoxSearch from "../../LeftViewChat/BoxSearch";
import BoxContact from "../../LeftViewChat/BoxContact";
function ContainerChat({ username }) {
  const [iconSearch, setIconSearch] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="container-chat">
      <div className="left-view">
        <BoxMenu handleLogout={handleLogout} imgProfile={imgProfile} />
        <BoxSearch iconSearch={iconSearch} setIconSearch={setIconSearch} />
        <BoxContact />
      </div>
      <div className="right-view">
        <div className="profile-receiver"></div>
        <div className="contain-chat"></div>
        <div className="box-text-chat"></div>
      </div>
    </div>
  );
}

export default ContainerChat;
