const { getSign } = require('../utils/getSign');

class ValidateOperation {
  operation;

  constructor(operation) {
    this.operation = operation;
  }

  cleanInput() {
    return this.operation.split(/[\+-\/*]/);
  }

  getSign() {
    return getSign(this.operation);
  }
}

module.exports.ValidateOperation = ValidateOperation;
