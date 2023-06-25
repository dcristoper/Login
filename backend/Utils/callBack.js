import User from "../Models/Users.js";

export const sendError = (err, statusCode, res) => {
  return res.status(statusCode).json({
    success: false,
    err,
    msg: err._message,
  });
};
export const sendToken = async (user, statusCode, res) => {
  const accesstoken = await user.signedAccessToken();
  const refreshToken = await user.signedSecretToken();
  await User.updateOne(
    { _id: user._id },
    { $set: { refreshToken: refreshToken } }
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  return res.status(statusCode).json({
    success: true,
    accesstoken,
  });
};
