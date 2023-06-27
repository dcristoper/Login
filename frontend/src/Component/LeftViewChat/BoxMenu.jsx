function BoxMenu({ handleLogout, imgProfile, setShowNewChatContainer }) {
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
