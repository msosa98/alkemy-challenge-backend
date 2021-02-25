const express = require("express");

class Server {
  constructor({ config, router }) {
    this.app = express().use(router);
    this.config = config;
  }

  start() {
    this.app.listen(this.config.PORT, () => {
      console.log(`Server on port ${this.config.PORT}`);
    });
  }
}

module.exports = Server;