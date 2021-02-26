class OperationRepository {
  constructor({ OperationModel }) {
    this.operationModel = OperationModel;
  }
  
  getOperationsByUserId(userID) {
    return this.operationModel.findAll({ where: { userID: userID } });
  }

  createOperation(operation) {
    return this.operationModel.create(operation);
  }

  async deleteOperation(operationID) {
    const operationDB = await this.operationModel.findByPk(operationID);
    return operationDB.destroy();
  }

  async updateOperation(operationID, operation) {
    const operationDB = await this.operationModel.findByPk(operationID);
    return await operationDB.update(operation);
  }
}

module.exports = OperationRepository;
