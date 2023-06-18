import express from "express";
import { addMessage, getMessage } from "../Controllers/Message.js";
const router = express.Router();

router.route("/").post(addMessage);
router.route("/:chatId").get(getMessage);

export default router;
