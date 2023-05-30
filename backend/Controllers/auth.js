export const getPrivate = async (req, res) => {
  return res.status(200).json({
    success: true,
    msg: "You got access to the private data in this route",
  });
};
