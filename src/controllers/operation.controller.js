let _operationService = null;

class OperationController {
  constructor({ OperationService }) {
    _operationService = OperationService;
  }
  
  async getOperationsByUserId(req, res) {
    try {
      const userID = req.params.id;
      const operations = await _operationService.getOperationsByUserId(userID);
      res.status(200).send(operations);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async createOperation(req, res) {
    try {
      const operation = req.body;
      const createdOperation = await _operationService.create(operation);
      res.status(201).send(createdOperation);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async deleteOperation(req, res) {
    try {
      const operationID = req.params.id;
      const deletedOperation = await _operationService.delete(operationID);
      res.status(200).send(deletedOperation);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async updateOperation(req, res) {
    try {
      const operationID = req.params.id;
      const newOperation = req.body;
      const updatedOperation  = await _operationService.update(operationID, newOperation);
      res.status(200).send(updatedOperation);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }
}

module.exports = OperationController;
