const BaseRepository = require("./base.repository");

class OperationRepository extends BaseRepository {
  constructor({ OperationModel }) {
    super(OperationModel);
    this.operationModel = OperationModel;
  }

  getOperationsByType(typeID) {
    return this.operationModel.findAll({ where: { typeID: typeID } });
  }
  
  getOperationsByUserId(userID) {
    return this.operationModel.findAll({ where: { userID: userID } });
  }
}

module.exports = OperationRepository;
