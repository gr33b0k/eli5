export class AppError extends Error {
  constructor(status, code, message, meta = {}) {
    super(message);

    this.status = status;
    this.code = code;
    this.meta = meta;
  }
}
