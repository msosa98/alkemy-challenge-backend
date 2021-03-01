class OperationService {
  constructor({ OperationRepository }) {
    this.operationRepository = OperationRepository;
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
