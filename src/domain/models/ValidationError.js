class ValidationError extends Error {
  constructor(errorMessage) {
    super(`\n*** Error: ${errorMessage} ***\n`);
    Error.captureStackTrace(this, this.constuctor);
  }
}

module.exports.ValidationError = ValidationError;
