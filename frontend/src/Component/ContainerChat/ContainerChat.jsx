import "./ContainerChat.scss";
function ContainerChat({ username }) {
  return (
    <div className="container-chat">
      <div className="left-view">
        <div className="box-menu">
          <div className="img-profile-acc"></div>
          <div className="btn-chat"></div>
          <div className="btn-menu"></div>
        </div>
        <div className="box-search"></div>
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
