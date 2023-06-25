function BoxMenu({ handleLogout, imgProfile }) {
  return (
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
  );
}

export default BoxMenu;
