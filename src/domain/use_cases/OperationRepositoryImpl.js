const { OperationRepository } = require('../repositories/OperationRepository');
const { Operations } = require('../../application/Operations');
const { ValidationError } = require('../models/ValidationError');

class OperationRepositoryImpl extends OperationRepository {
  operations = new Operations();

  constructor() {
    super();
  }

  isValidModel(operationModel) {
    if (!operationModel) throw new ValidationError('Ingrese una operación, e.g. 2+2');
    if (!operationModel.numberOne) throw new ValidationError('Ingrese el primer valor');
    if (!operationModel.operationSign) throw new ValidationError('Ingrese el signo de la operación');
    if (!operationModel.numberTwo) throw new ValidationError('Ingrese el segundo valor');
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
      const result = this.operations.sum(operationModel.numberOne, operationModel.numberTwo);

      return result;
    } catch (error) {
      return error;
    }
  }
  substract(operationModel) {
    try {
      const result = this.operations.substract(operationModel.numberOne, operationModel.numberTwo);

      return result;
    } catch (error) {
      return error;
    }
  }
  multiply(operationModel) {
    try {
      const result = this.operations.multiply(operationModel.numberOne, operationModel.numberTwo);

      return result;
    } catch (error) {
      return error;
    }
  }
  divide(operationModel) {
    try {
      const result = this.operations.divide(operationModel.numberOne, operationModel.numberTwo);

      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports.OperationRepositoryImpl = OperationRepositoryImpl;
