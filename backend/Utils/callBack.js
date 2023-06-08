export const sendError = (err, statusCode, res) => {
  return res.status(statusCode).json({
    success: false,
    err,
    msg: err._message,
  });
};
export const sendToken = async (user, statusCode, res) => {
  const token = await user.signedToken();
  return res.status(statusCode).json({
    success: true,
    token,
  });
};
