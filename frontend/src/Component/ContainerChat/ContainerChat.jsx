import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContainerChat.scss";
import imgProfile from "../../Assets/profilePict.png";
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
        <div className="box-menu">
          <div className="img-profile-user">
            <img src={imgProfile} alt="" />
          </div>
          <div className="icon-menu">
            <span className="material-symbols-outlined">chat</span>
            <span className="material-symbols-outlined">data_usage</span>
            <span className="material-symbols-outlined" onClick={handleLogout}>
              more_vert
            </span>
          </div>
        </div>

        <div className="box-search">
          <span class="material-symbols-outlined">
            {iconSearch ? "arrow_back" : "search"}
          </span>
          <input
            type="text"
            placeholder="Search new chat"
            onFocus={() => setIconSearch(true)}
            onBlur={() => setIconSearch(false)}
          />
          <span className="material-symbols-outlined">filter_list</span>
        </div>
        <div className="box-chat"></div>
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
