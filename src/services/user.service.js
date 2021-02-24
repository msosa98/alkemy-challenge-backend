const BaseService = require("./base.service");

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    this.userRepository = UserRepository;
  }

  getUserByEmail(email) {
    return this.userRepository.getUserByEmail(email);
  }
}

module.exports = UserService;