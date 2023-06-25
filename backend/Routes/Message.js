import express from "express";
import { addMessage, getMessage } from "../Controllers/Message.js";
const router = express.Router();

router.route("/message").post(addMessage);
router.route("/message/:conversationId").get(getMessage);

export default router;
