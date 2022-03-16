class Operations {

  constructor() {
    
  }

  sum(numberOne, numberTwo){
    if(!numberOne || !numberTwo) return;

    return +numberOne + +numberTwo;
  }
  substract(numberOne, numberTwo){
    if(!numberOne || !numberTwo) return;

    return +numberOne - +numberTwo;
  }
  multiply(numberOne, numberTwo){
    if(!numberOne || !numberTwo) return;

    return +numberOne * +numberTwo;
  }
  divide(numberOne, numberTwo){
    if(!numberOne || !numberTwo) return;

    return +numberOne / +numberTwo;
  }
}

module.exports.Operations = Operations