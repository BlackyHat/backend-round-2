class AppError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.success = false;
    this.error = message;
  }
}
class BadRequestError extends AppError {
  constructor(message) {
    super(400, message);
  }
}
class NotAuthorizedError extends AppError {
  constructor(message) {
    super(401, message);
  }
}
class NotFoundError extends AppError {
  constructor(message) {
    super(404, message);
  }
}
class ConflictError extends AppError {
  constructor(message) {
    super(409, message);
  }
}

module.exports = {
  AppError,
  BadRequestError,
  NotAuthorizedError,
  ConflictError,
  NotFoundError,
};
