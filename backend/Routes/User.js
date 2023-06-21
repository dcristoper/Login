import express from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  validReset,
} from "../Controllers/User.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);
router.route("/resetpassword/:resetToken").get(validReset);

export default router;
