const BaseService = require("./base.service");

class OperationService extends BaseService {
  constructor({ OperationRepository, UserService }) {
    super(OperationRepository);
    this.operationRepository = OperationRepository;
    this.userService = UserService;
  }

  getOperationsByType(typeID) {
    return this.operationRepository.getOperationsByType(typeID);
  }

  getOperationsByUserId(userID) {
    return this.operationRepository.getOperationsByUserId(userID);
  }

  async create(operation) {
    const { amount, typeID, userID } = operation;
    const user = await this.userService.getById(userID);

    if (typeID === 1) {
      const newUser = { ...user, balance: parseInt(user.balance) + amount };
      await this.userService.update(userID, newUser);
    } else {
      const newUser = { ...user, balance: parseInt(user.balance) - amount };
      await this.userService.update(userID, newUser);
    }

    return this.operationRepository.create(operation);
  }
}

module.exports = OperationService;
