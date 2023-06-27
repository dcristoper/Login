import "./NewChat.scss";
function NewChat({ showNewChatContainer, setShowNewChatContainer }) {
  return (
    // prettier-ignore
    <div className={showNewChatContainer ? "new-chat-container" : "new-chat-container close"}>
      <span className="material-symbols-outlined" onClick={() => setShowNewChatContainer(false)}>
        arrow_back_ios
      </span>
      New asdasdasdChat
    </div>
  );
}

export default NewChat;
