import express from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
} from "../Controllers/User.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);

export default router;
