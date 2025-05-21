import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const protectedAction = (req, res, next) => {
  const { authorization } = req.headers;

  console.log("Authorization: ", authorization);
  if (!authorization) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized",
      data: [],
    });
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
        data: [],
      });
    }

    req.user = decoded.payload;
  });

  next();
};
