const { Router } = require("express");

module.exports = ({ AuthController }) => {
  const router = Router();

  router.post("/api/signin", AuthController.signIn);
  router.post("/api/signup", AuthController.signUp);
  
  return router;
};
