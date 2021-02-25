const { Router } = require("express");

module.exports = ({ AuthController }) => {
  const router = Router();

  router.post("/api/auth/signin", AuthController.signIn);
  router.post("/api/auth/signup", AuthController.signUp);
  
  return router;
};
