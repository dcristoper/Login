import express from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  validReset,
  refreshToken,
  getUser,
  logOut,
} from "../Controllers/User.js";

const router = express.Router();

router.route("/user").get(getUser);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").delete(logOut);
router.route("/token").get(refreshToken);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);
router.route("/resetpassword/:resetToken").get(validReset);

export default router;
