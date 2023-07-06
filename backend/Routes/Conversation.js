import express from "express";
import { chats, userChats } from "../Controllers/Conversation.js";
const router = express.Router();

router.route("/conversation").post(chats);
router.route("/conversation/:userId").get(userChats);

export default router;
