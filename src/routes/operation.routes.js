const { Router } = require("express");

module.exports = ({ OperationController }) => {
  const router = Router();

  router.post("/api/operations", OperationController.createOperation);
  router.delete("/api/operations/:id", OperationController.deleteOperation);
  router.put("/api/operations/:id", OperationController.updateOperation);
  router.get("/api/operations/type/:id", OperationController.getOperationsByType);
  router.get("/api/operations/user/:id", OperationController.getOperationsByUserId);
  
  return router;
};
