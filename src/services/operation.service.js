class OperationService {
  constructor({ OperationRepository, UserService }) {
    this.operationRepository = OperationRepository;
    this.userService = UserService;
  }

  getOperationsByUserId(userID) {
    return this.operationRepository.getOperationsByUserId(userID);
  }

  async createOperation(operation) {
    const { amount, typeID, userID } = operation;
    const user = await this.userService.getUserById(userID);

    if (typeID === 1) {
      const newUser = { ...user, balance: parseInt(user.balance) + amount };
      await this.userService.updateUser(userID, newUser);
    } else {
      const newUser = { ...user, balance: parseInt(user.balance) - amount };
      await this.userService.updateUser(userID, newUser);
    }

    return this.operationRepository.createOperation(operation);
  }

  deleteOperation(operationID) {
    return this.operationRepository.deleteOperation(operationID);
  }

  updateOperation(operationID, operation) {
    return this.operationRepository.updateOperation(operationID, operation);
  }
}

module.exports = OperationService;
