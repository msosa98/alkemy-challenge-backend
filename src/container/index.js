const { createContainer, asValue, asFunction, asClass } = require("awilix");

const container = createContainer();

// ================
// Config & Server
// ================
const server = require("../server");
const config = require("../config");
container.register({
  server: asClass(server).singleton(),
  config: asValue(config)
});

// ================
// Routes
// ================
const { Router, AuthRoutes, CategoryRoutes } = require("../routes");
container.register({
  router: asFunction(Router),
  AuthRoutes: asFunction(AuthRoutes),
  CategoryRoutes: asFunction(CategoryRoutes),
});

// ================
// Controllers
// ================
const { AuthController, CategoryController } = require("../controllers");
container.register({
  AuthController: asClass(AuthController).singleton(),
  CategoryController: asClass(CategoryController).singleton(),
});

// ================
// Services
// ================
const { UserService, AuthService, CategoryService } = require("../services");
container.register({
  AuthService: asClass(AuthService).singleton(),
  UserService: asClass(UserService).singleton(),
  CategoryService: asClass(CategoryService).singleton(),
});

// ================
// Repositories
// ================
const { UserRepository, CategoryRepository } = require("../repositories");
container.register({
  UserRepository: asClass(UserRepository).singleton(),
  CategoryRepository: asClass(CategoryRepository).singleton(),
});

// ================
// Models
// ================
const { UserModel, CategoryModel } = require("../models");
container.register({
  UserModel: asValue(UserModel),
  CategoryModel: asValue(CategoryModel),
});

module.exports = container;
