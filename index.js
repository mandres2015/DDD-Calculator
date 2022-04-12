const { ReadLine } = require('./src/infrastructure/ReadLine');
const { OperationRepositoryImpl } = require('./src/domain/use_cases/OperationRepositoryImpl');
const { OperationModel } = require('./src/domain/models/operation');
const { ValidateOperation } = require('./src/infrastructure/ValidateOperation');
const { ValidationError } = require('./src/domain/models/ValidationError');

const operationRepositoryImpl = new OperationRepositoryImpl();
const { readLine } = new ReadLine();

const recursiveAsyncReadLine = function () {
  readLine.question('Ingresa la operación a calcular: ', function (input) {
    try {
      const validateOperation = new ValidateOperation(input);
      const cleanInput = validateOperation.cleanInput();
      const operationSign = validateOperation.getSign();
      if (cleanInput.length <= 1 && !operationSign) {
        throw new ValidationError('Ingrese una operación, e.g. 2+2');
      }
      const operationModel = new OperationModel();
      operationModel.numberOne = cleanInput[0];
      operationModel.numberTwo = cleanInput[1];
      operationModel.operationSign = operationSign;

      const result = operationRepositoryImpl.resolveOperation(operationModel);
      console.log(`El resultado es: ${result}`);

      readLine.question('Desea salir: (y/n) ', function (answer) {
        if (answer.toString().trim().toLocaleLowerCase() === 'y') readLine.close();
        recursiveAsyncReadLine();
      });
    } catch (error) {
      console.log(error.message);
      recursiveAsyncReadLine();
    }
  });
};

recursiveAsyncReadLine();
