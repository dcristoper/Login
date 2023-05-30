import User from "../Models/Users.js";
import sendEmail from "../Utils/sendEmail.js";
import crypto from "crypto";

export const register = async (req, res, next) => {
  const { username, email, password, confPassword } = req.body;
  const findUser = await User.findOne({ email }).select("+password");

  try {
    // * ==============================
    // * Check password and confirm password
    // * ==============================
    if (password !== confPassword) {
      return es.status(400).json({
        success: false,
        msg: "Your password is not match",
      });
    }
    // * ==============================
    // * Check available of email
    // * ==============================
    if (findUser?.email === email) {
      return res.status(400).json({
        success: false,
        msg: "Email is already use",
      });
    } else {
      // * ==============================
      // * Save to database
      // * ==============================
      const user = await User.create({
        username,
        email,
        password,
      });

      sendToken(user, 201, res);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const login = async (req, res, next) => {
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
      return res
        .status(404)
        .json({ success: false, error: "User is not found" });
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
    res.status(500).json({
      success: false,
      error: error.message,
    });
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
    next(error);
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
        msg: "Invalid Reset Token",
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Reset Success",
    });
  } catch (error) {
    next(error);
  }
};

const sendToken = async (user, statusCode, res) => {
  const token = await user.signedToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};
