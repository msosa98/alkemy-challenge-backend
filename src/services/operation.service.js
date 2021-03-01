class OperationService {
  constructor({ OperationRepository, UserService }) {
    this.operationRepository = OperationRepository;
    this.userService = UserService;
  }

  getOperationsByUserId(userID) {
    return this.operationRepository.getOperationsByUserId(userID);
  }

  createOperation(operation) {
    return this.operationRepository.createOperation(operation);
  }

  deleteOperation(operationID) {
    return this.operationRepository.deleteOperation(operationID);
  }

  updateOperation(operationID, operation) {
    return this.operationRepository.updateOperation(operationID, operation);
  }

  getBalanceByUserId(userID) {
    return this.operationRepository.getBalanceByUserId(userID);
  }
}

module.exports = OperationService;
