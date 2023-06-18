import mongoose from "mongoose";

const Chat = mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const ChatModel = mongoose.model("Chat", Chat);
export default ChatModel;
