class UserRepository {
  constructor({ UserModel }) {
    this.userModel = UserModel;
  }

  createUser(user) {
    return this.userModel.create(user);
  }

  getUserByEmail(email) {
    return this.userModel.findOne({ where: { email: email } });
  }
}

module.exports = UserRepository;
