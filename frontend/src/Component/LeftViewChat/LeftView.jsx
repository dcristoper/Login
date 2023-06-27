import "./LeftView.scss";
import BoxMenu from "./BoxMenu";
import BoxSearch from "./BoxSearch";
import BoxContact from "./BoxContact";
function LeftView(props) {
  const {
    handleLogout,
    iconSearch,
    setIconSearch,
    setShowNewChatContainer,
    imgProfile,
  } = props;
  return (
    <div className="left-view">
      <BoxMenu
        handleLogout={handleLogout}
        imgProfile={imgProfile}
        setShowNewChatContainer={setShowNewChatContainer}
      />
      <BoxSearch iconSearch={iconSearch} setIconSearch={setIconSearch} />
      <BoxContact />
    </div>
  );
}

export default LeftView;
