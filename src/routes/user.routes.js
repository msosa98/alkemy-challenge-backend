const { Router } = require("express");

module.exports = ({ UserController }) => {
  const router = Router();

  router.post("/api/signin", UserController.signIn);
  router.post("/api/signup", UserController.signUp);
  
  return router;
};
