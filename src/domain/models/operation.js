class OperationModel {
  numberOne = 0;
  numberTwo = 0;
  operationSign = '';

  set numberOne(numberOne) {
    this.numberOne = numberOne;
  }
  set numberTwo(numberTwo) {
    this.numberTwo = numberTwo;
  }
  set operationSign(operationSign) {
    this.operationSign = operationSign;
  }

  get numberOne() {
    return this.numberOne;
  }
  get numberTwo() {
    return this.numberTwo;
  }
  get operationSign() {
    return this.operationSign;
  }
}

module.exports.OperationModel = OperationModel;
