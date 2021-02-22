const express = require("express");

class Server {
  constructor({ config, router }) {
    this.app = express().use(router);
    this.config = config;
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`Server on port ${this.config.port}`);
    });
  }
}

module.exports = Server;