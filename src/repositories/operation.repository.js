const BaseRepository = require("./base.repository");

class OperationRepository extends BaseRepository {
  constructor({ OperationModel }) {
    super(OperationModel);
    this.operationModel = OperationModel;
  }
  
  getOperationsByUserId(userID) {
    return this.operationModel.findAll({ where: { userID: userID } });
  }
}

module.exports = OperationRepository;
