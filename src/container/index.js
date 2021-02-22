const { createContainer, asValue, asFunction, asClass } = require("awilix");

// server
const server = require("../server");

// config
const config = require("../config");

// routes
const { Router, UserRoutes } = require("../routes");

// controllers
const { UserController } = require("../controllers");

// services
const { UserService } = require("../services");

// repositories
const { UserRepository } = require("../repositories");

// models
const { UserModel } = require("../models");

const container = createContainer();

container.register({
  server: asClass(server).singleton(),
  config: asValue(config),
  router: asFunction(Router),
});

container.register({
  UserRoutes: asFunction(UserRoutes),
});

container.register({
  UserController: asClass(UserController).singleton(),
});

container.register({
  UserService: asClass(UserService).singleton(),
});

container.register({
  UserRepository: asClass(UserRepository).singleton(),
});

container.register({
  UserModel: asValue(UserModel),
});

module.exports = container;
