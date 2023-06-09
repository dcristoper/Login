import jwt from "jsonwebtoken";

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

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
    if (err) res.status(404).json("Not authorized to access this route");
    try {
      const user = decode.id;
      if (!user) {
        return res.status(404).json({
          msg: "Not user found with this id",
        });
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
    }
  });
};
