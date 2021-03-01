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
    return operationDB.update(operation);
  }

  async getBalanceByUserId(userID) {
    const entry = await this.operationModel.sum('amount',{ where: { userID: userID, typeID: 1 } });
    const egress = await this.operationModel.sum('amount',{ where: { userID: userID, typeID: 2 } });
    return entry - egress;
  }
}

module.exports = OperationRepository;
