import { useState } from "react";
import "./MainApp.scss";
import LeftView from "../../LeftViewChat/LeftView";
import NewChat from "../../NewChat/NewChat";
import RightView from "../../RightViewChat/RightView";
function MainApp() {
  const [iconSearch, setIconSearch] = useState(false);
  const [showNewChatContainer, setShowNewChatContainer] = useState(false);

  return (
    <div className="container-chat">
      <LeftView
        iconSearch={iconSearch}
        setIconSearch={setIconSearch}
        setShowNewChatContainer={setShowNewChatContainer}
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
