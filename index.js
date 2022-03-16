const readline = require('readline');
const {OperationRepositoryImpl} = require("./src/application/OperationRepositoryImpl")
const OperationModel = require("./src/domain/operation/operation").OperationModel;
const {getSign} = require('./src/utils/getSign');


const operationRepositoryImpl = new OperationRepositoryImpl();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  rl.question('Ingresa la operación a calcular: ', function (input) {
    const cleanInput = input.split(/[\+-\/*]/);
    const operationSign = getSign(input);
    if(cleanInput.length <= 1 && !operationSign) {
      recursiveAsyncReadLine();
      return;
    }
    const operationModel = new OperationModel();
    operationModel.numberOne = cleanInput[0];
    operationModel.numberTwo = cleanInput[1];
    operationModel.operationSign = operationSign;

    const result = operationRepositoryImpl.resolveOperation(operationModel);
    console.log(`El resultado es: ${result}`);

    rl.question('Desea salir: (y/n) ', function (answer) {
      if (answer.toString().trim().toLocaleLowerCase() === 'y') rl.close();
      recursiveAsyncReadLine();
    });
  });
};

rl.on('close', function () {
  console.log('GRACIAS');
  process.exit(0);
});

recursiveAsyncReadLine();