const express = require("express")
const cors = require("cors");

module.exports = ({ UserRoutes }) => {
  const router = express.Router();

  router.use(cors());
  router.use(express.json());
  router.use(UserRoutes);

  return router;
};