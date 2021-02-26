class UserRepository {
  constructor({ UserModel }) {
    this.userModel = UserModel;
  }

  getUserById(userID) {
    return this.userModel.findByPk(userID);
  }

  getUserByEmail(email) {
    return this.userModel.findOne({ where: { email: email } });
  }

  createUser(user) {
    return this.userModel.create(user);
  }

  async updateUser(userID, user) {
    const userDB = await this.userModel.findByPk(userID);
    return userDB.update(user);
  }
}

module.exports = UserRepository;
