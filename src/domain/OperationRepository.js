class OperationRepository {
  constructor() {
    if (this.constructor == OperationRepository) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  sum() {
    throw new Error('Method must be implemented.');
  }
  substract() {
    throw new Error('Method must be implemented.');
  }
  multiply() {
    throw new Error('Method must be implemented.');
  }
  divide() {
    throw new Error('Method must be implemented.');
  }
}

module.exports.OperationRepository = OperationRepository