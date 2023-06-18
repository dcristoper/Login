import express from "express";
import { chats, userChats, findChats } from "../Controllers/Chats.js";
const router = express.Router();

router.route("/chat").post(chats);
router.route("/:userId").get(userChats);
router.route("/find/:firstId/:secondId").get(findChats);

export default router;
