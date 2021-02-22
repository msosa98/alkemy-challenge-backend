const container = require("./container");
const server = container.resolve("server");
const db = require("./database");

db.authenticate()
  .then(server.start())
  .catch(console.log);
