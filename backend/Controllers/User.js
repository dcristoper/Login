import User from "../Models/Users.js";
import sendEmail from "../Utils/sendEmail.js";
import { sendError, sendToken } from "../Utils/callBack.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    const userData = Promise.all(
      users.map(async (user) => {
        const { email, username, _id } = user;
        const result = { user: { email, username }, userId: _id };
        return result;
      })
    );
    const dataUser = await userData;
    res.status(200).json(dataUser);
  } catch (error) {
    console.log(`Error getUser`, error);
  }
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const findUser = await User.findOne({ email }).select("+password");

  try {
    // * ==============================
    // * Check available of email
    // * ==============================
    if (findUser?.email === email) {
      return res.status(400).json({
        success: false,
        msg: "Email is already use",
      });
    }
    // * ==============================
    // * Save to database
    // * ==============================
    const user = await User.create({
      username,
      email,
      password,
    });
    await user.save();
    res.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    return sendError(error, 500, res);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Please provide email and password",
    });
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    // * ==============================
    // * isNot exist user
    // * ==============================
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User is not found or please registered",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        error: "Wrong password",
      });
    }
    sendToken(user, 200, res);

    // * ==============================
    // * Error
    // * ==============================
  } catch (error) {
    return sendError(error, 500, res);
  }
};

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: false,
        msg: "Email could not be sent",
      });
    }
    const resetToken = user.getResetPassword();
    await user.save();

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        resetToken,
      });
      res.status(200).json({
        success: true,
        msg: "Email Sent",
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return res.status(500).json("Email could not be send");
    }
  } catch (error) {
    return next(error);
  }
};

export const validReset = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        status: false,
        msg: "Link has expired",
      });
    }
    return res.status(200).json({
      status: true,
      msg: "Password reset success",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        status: false,
        msg: "Link has expired",
      });
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.status(201).json({
      success: true,
      msg: "Password Reset Success",
    });
  } catch (error) {
    return next(error);
  }
};

export const refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return res.sendStatus(401);
  try {
    const user = await User.findOne({ refreshToken });
    if (!user) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.SECRET_TOKEN, async (err, decoded) => {
      if (err) return res.sendStatus(403);
      const accessToken = await user.signedAccessToken();
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};
