import jwt from "jsonwebtoken";
import User from "../Models/Users.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({
      msg: "Not authorized to access this route",
    });
  }
  try {
    const decode = await jwt.verify(token, process.env.SECRET_TOKEN);

    const user = await User.findById(decode.id);
    if (!user) {
      return res.status(404).json({
        msg: "Not user found with this id",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Not authorized to access this route",
    });
  }
};
