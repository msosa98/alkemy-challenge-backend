const { Router } = require("express");
const { verifyToken } = require("../middlewares");

module.exports = ({ OperationController }) => {
  const router = Router();

  router.post("/api/operations", verifyToken, OperationController.createOperation);
  router.delete("/api/operations/:id", verifyToken, OperationController.deleteOperation);
  router.put("/api/operations/:id", verifyToken, OperationController.updateOperation);
  router.get("/api/operations/user/:id", verifyToken, OperationController.getOperationsByUserId);
  router.get("/api/operations/balance/:id", verifyToken, OperationController.getBalanceByUserId);
  
  return router;
};
