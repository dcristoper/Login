import express from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  validReset,
  refreshToken,
} from "../Controllers/User.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/token").get(refreshToken);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);
router.route("/resetpassword/:resetToken").get(validReset);

export default router;
