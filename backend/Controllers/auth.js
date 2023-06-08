export const getPrivate = async (req, res) => {
  const { username } = req.user;
  return res.status(200).json({
    success: true,
    msg: "You got access to the private data in this route",
    username,
  });
};
