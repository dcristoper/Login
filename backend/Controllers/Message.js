import Message from "../Models/Message.js";
import User from "../Models/Users.js";
export const addMessage = async (req, res) => {
  const { conversationId, senderId, message } = req.body;
  try {
    const messages = new Message({
      conversationId,
      senderId,
      message,
    });
    const result = await messages.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getMessage = async (req, res) => {
  const { conversationId } = req.params;
  try {
    const messages = await Message.find({ conversationId });
    const messageUserData = Promise.all(
      messages.map(async (message) => {
        const user = await User.findById(message.senderId);
        const { email, username } = user;
        return {
          user: { email, username },
          message: message.message,
        };
      })
    );
    const result = await messageUserData;
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
