import { useRef } from "react";

function InputChat() {
  const inputChatRef = useRef();

  return (
    <div className="box-input-chat">
      <span className="material-symbols-outlined">mood</span>
      <span className="material-symbols-outlined">attach_file</span>
      <div
        ref={inputChatRef}
        className="input-chat"
        contentEditable
        placeholder="Ketik Pesan"
      ></div>
      <span className="material-symbols-outlined">send</span>
    </div>
  );
}

export default InputChat;
