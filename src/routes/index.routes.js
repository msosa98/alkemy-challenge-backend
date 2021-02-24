const express = require("express")
const cors = require("cors");

module.exports = ({ AuthRoutes, CategoryRoutes }) => {
  const router = express.Router();

  router.use(cors());
  router.use(express.json());
  router.use(AuthRoutes);
  router.use(CategoryRoutes);

  return router;
};