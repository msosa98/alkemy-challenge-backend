const { createContainer, asValue, asFunction, asClass } = require("awilix");

// config
const config = require("../config");

// server
const server = require("../server");

// routes
const { Router, AuthRoutes, OperationRoutes } = require("../routes");

// controllers
const { AuthController, OperationController } = require("../controllers");

// services
const { UserService, AuthService, OperationService } = require("../services");

// repositories
const { UserRepository, OperationRepository } = require("../repositories");

// models
const { UserModel, OperationModel } = require("../models");

// container
const container = createContainer();

container.register({
  server: asClass(server).singleton(),
  config: asValue(config),
});

container.register({
  router: asFunction(Router),
  AuthRoutes: asFunction(AuthRoutes),
  OperationRoutes: asFunction(OperationRoutes),
});

container.register({
  AuthController: asClass(AuthController).singleton(),
  OperationController: asClass(OperationController).singleton(),
});

container.register({
  AuthService: asClass(AuthService).singleton(),
  UserService: asClass(UserService).singleton(),
  OperationService: asClass(OperationService).singleton(),
});

container.register({
  UserRepository: asClass(UserRepository).singleton(),
  OperationRepository: asClass(OperationRepository).singleton(),
});

container.register({
  UserModel: asValue(UserModel),
  OperationModel: asValue(OperationModel),
});

module.exports = container;
