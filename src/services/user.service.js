class UserService {
  constructor({ UserRepository }) {
    this.userRepository = UserRepository;
  }

  getUserById(userID) {
    return this.userRepository.getUserById(userID);
  }

  getUserByEmail(email) {
    return this.userRepository.getUserByEmail(email);
  }

  createUser(user) {
    return this.userRepository.createUser(user);
  }

  updateUser(userID, user) {
    return this.userRepository.updateUser(userID, user);
  }
}

module.exports = UserService;