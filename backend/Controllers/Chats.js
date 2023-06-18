import ChatModel from "../Models/Chat.js";

export const chats = async (req, res) => {
  const { senderId, receiverId } = req.body;
  const newChat = new ChatModel({
    members: [senderId, receiverId],
  });

  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const findChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
