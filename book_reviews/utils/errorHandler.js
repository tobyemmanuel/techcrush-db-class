export function APIResponseHandler(
  res,
  status,
  statusCode = 400,
  message = "error! Please reach admin",
  data = []
) {
  if (status) return successResponse(res, statusCode, message, data);
  return errorResponse(statusCode, message, data);
}

export function successResponse(res, statusCode, message, data=[]) {
  res.status(statusCode).json({
    status: true,
    message: message,
    data: data,
  });
}

export function errorResponse(res, statusCode, message, data=[]) {
  res.status(statusCode).json({
    status: false,
    message: message,
    data: data,
  });
}

export function ExpressErrors(err, req, res, next) {
  // if (err.name === "ValidationError") {
  //   return errorResponse(res, 422, err.message);
  // }
  // if (err.name === "CastError") {
  //   return errorResponse(res, 422, "Invalid ID");
  // }
  // if (err.name === "JsonWebTokenError") {
  //   return errorResponse(res, 401, "Invalid token");
  // }
  // if (err.name === "TokenExpiredError") {
  //   return errorResponse(res, 401, "Token expired");
  // }
  return APIResponseHandler(res, false, 500, err.message);
}
