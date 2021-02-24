const { Router } = require("express");

module.exports = ({ CategoryController }) => {
  const router = Router();

  router.get("/api/categories", CategoryController.findAll);
  router.post("/api/categories", CategoryController.create);
  router.get("/api/categories/:id", CategoryController.findByPk);
  router.delete("/api/categories/:id", CategoryController.delete);
  router.put("/api/categories/:id", CategoryController.update);
  
  return router;
};
