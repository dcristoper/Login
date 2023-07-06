import { useSelector } from "react-redux";
import { selectMessageUser } from "../../Utils/MessageSlice";

function Message() {
  const messages = useSelector(selectMessageUser);
  const idLoggin = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="container-message">
      {messages.map(({ user, message }, i) => {
        const sender = idLoggin.id === user._id;
        return (
          <div
            key={i}
            className={sender ? "sender-message chat" : "receiver-message chat"}
          >
            {message}
          </div>
        );
      })}
    </div>
  );
}

export default Message;
