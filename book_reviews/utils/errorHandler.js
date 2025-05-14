function APIErrorHandler(
  status,
  statusCode = 400,
  message = "error! Please reach admin",
  data = []
) {
  if (status) return successResponse(statusCode, message, data);
  return errorResponse(statusCode, message, data);
}

function successResponse(statusCode, message, data) {
    
}

function errorResponse(statusCode, message, data) {}
