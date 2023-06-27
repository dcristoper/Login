import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainApp.scss";
import imgProfile from "../../../Assets/profilePict.png";
import LeftView from "../../LeftViewChat/LeftView";
import NewChat from "../../NewChat/NewChat";
import RightView from "../../RightViewChat/RightView";
function MainApp() {
  const [iconSearch, setIconSearch] = useState(false);
  const [showNewChatContainer, setShowNewChatContainer] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("data");
    navigate("/login");
  };

  return (
    <div className="container-chat">
      <LeftView
        handleLogout={handleLogout}
        iconSearch={iconSearch}
        setIconSearch={setIconSearch}
        setShowNewChatContainer={setShowNewChatContainer}
        imgProfile={imgProfile}
      />
      <RightView />
      <NewChat
        showNewChatContainer={showNewChatContainer}
        setShowNewChatContainer={setShowNewChatContainer}
      />
    </div>
  );
}

export default MainApp;
