import express from "express";
import { chats, userChats, findChats } from "../Controllers/Conversation.js";
const router = express.Router();

router.route("/conversation").post(chats);
router.route("/conversation/:userId").get(userChats);
router.route("/find/:firstId/:secondId").get(findChats);

export default router;
