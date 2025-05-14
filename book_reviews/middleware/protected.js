export const protectedAction = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization !== process.env.AUTH_TOKEN) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized",
      data: [],
    });
  }

  next();
};
