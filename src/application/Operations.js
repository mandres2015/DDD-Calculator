class Operations {
  constructor() {}

  sum(numberOne, numberTwo) {
    return +numberOne + +numberTwo;
  }
  substract(numberOne, numberTwo) {
    return +numberOne - +numberTwo;
  }
  multiply(numberOne, numberTwo) {
    return +numberOne * +numberTwo;
  }
  divide(numberOne, numberTwo) {
    return +numberOne / +numberTwo;
  }
}

module.exports.Operations = Operations;
