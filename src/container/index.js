const { createContainer, asValue, asFunction, asClass } = require("awilix");

// server
const server = require("../server");

// config
const config = require("../config");

// routes
const { Router } = require("../routes");

const container = createContainer();

container.register({
  server: asClass(server).singleton(),
  config: asValue(config),
  router: asFunction(Router),
});

module.exports = container;