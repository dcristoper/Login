import ProfileReceiver from "./ProfileReceiver";
import "./RightView.scss";
import Message from "./Message";
import InputChat from "./InputChat";

function RightView() {
  return (
    <div className="right-view">
      <ProfileReceiver />
      <Message />
      <InputChat />
    </div>
  );
}

export default RightView;
