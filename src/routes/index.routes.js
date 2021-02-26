const express = require("express");
const cors = require("cors");

module.exports = ({ AuthRoutes, OperationRoutes }) => {
  const router = express.Router();

  router.use(cors());
  router.use(express.urlencoded({ extended: false }));
  router.use(express.json());
  router.use(AuthRoutes);
  router.use(OperationRoutes);

  return router;
};
