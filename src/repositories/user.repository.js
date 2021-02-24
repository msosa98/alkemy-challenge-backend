const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor({ UserModel }) {
    super(UserModel);
    this.userModel = UserModel;
  }

  getUserByEmail(email) {
    return this.userModel.findOne({ where: { email: email } });
  }
}

module.exports = UserRepository;
