const { OperationRepository } = require('../domain/OperationRepository');
const { Operations } = require('../infrastructure/Operations');

class OperationRepositoryImpl extends OperationRepository {
  operations = new Operations();

  constructor() {
    super();
  }

  isValidModel(operationModel) {
    if (operationModel === null) return;
    if (operationModel.numberOne === null) return;
    if (operationModel.numberTwo === null) return;
    if (operationModel.operationSign === null) return;
    return true;
  }

  resolveOperation(operationModel) {
    if (!this.isValidModel(operationModel)) return;

    switch (operationModel.operationSign) {
      case '+':
        return this.sum(operationModel);
      case '-':
        return this.substract(operationModel);
      case '*':
        return this.multiply(operationModel);
      case '/':
        return this.divide(operationModel);
      default:
        return;
    }
  }

  sum(operationModel) {
    try {
      const result = this.operations.sum(
        operationModel.numberOne,
        operationModel.numberTwo
      );

      return result;
    } catch (error) {
      return error;
    }
  }
  substract(operationModel) {
    try {
      const result = this.operations.substract(
        operationModel.numberOne,
        operationModel.numberTwo
      );

      return result;
    } catch (error) {
      return error;
    }
  }
  multiply(operationModel) {
    try {
      const result = this.operations.multiply(
        operationModel.numberOne,
        operationModel.numberTwo
      );

      return result;
    } catch (error) {
      return error;
    }
  }
  divide(operationModel) {
    try {
      const result = this.operations.divide(
        operationModel.numberOne,
        operationModel.numberTwo
      );

      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports.OperationRepositoryImpl = OperationRepositoryImpl;
