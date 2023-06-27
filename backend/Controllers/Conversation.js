import Conversation from "../Models/Conversation.js";
import User from "../Models/Users.js";

export const chats = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const newChat = new Conversation({
      members: [senderId, receiverId],
    });
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const userChats = async (req, res) => {
  const { userId } = req.params;
  try {
    const chats = await Conversation.find({
      members: { $in: [userId] },
    });
    const conversationData = Promise.all(
      chats.map(async (chat) => {
        const receiverId = await chat.members.find((id) => id !== userId);
        const userReceiver = await User.findById(receiverId);
        const { email, username } = userReceiver;
        const dataUser = {
          user: { email, username },
          conversationId: chat.id,
        };
        return dataUser;
      })
    );
    const result = await conversationData;
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const findChats = async (req, res) => {
  try {
    const chat = await Conversation.find({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
