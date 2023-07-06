import imgProfile from "../../Assets/profilePict.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BoxMenu({ setShowNewChatContainer }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.delete("api/auth/logout");
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="box-menu">
      <div className="img-profile-user">
        <img src={imgProfile} alt="" />
      </div>
      <div className="icon-menu">
        <span
          className="material-symbols-outlined"
          data-hover="New Chat"
          onClick={() => setShowNewChatContainer(true)}
        >
          chat
        </span>
        <span className="material-symbols-outlined" data-hover="Status">
          data_usage
        </span>
        <span
          className="material-symbols-outlined"
          data-hover="Log Out"
          onClick={handleLogout}
        >
          more_vert
        </span>
      </div>
    </div>
  );
}

export default BoxMenu;
