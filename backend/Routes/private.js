import express from "express";
import { protect } from "../Middleware/auth.js";
import { getPrivate } from "../Controllers/auth.js";
const privates = express.Router();

privates.route("/").get(protect, getPrivate);

export default privates;
