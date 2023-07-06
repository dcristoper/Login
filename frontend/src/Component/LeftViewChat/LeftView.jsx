import "./LeftView.scss";
import BoxMenu from "./BoxMenu";
import BoxSearch from "./BoxSearch";
import BoxContact from "./BoxContact";
function LeftView(props) {
  const { iconSearch, setIconSearch, setShowNewChatContainer } = props;

  return (
    <div className="left-view">
      <BoxMenu setShowNewChatContainer={setShowNewChatContainer} />
      <BoxSearch iconSearch={iconSearch} setIconSearch={setIconSearch} />
      <BoxContact />
    </div>
  );
}

export default LeftView;
