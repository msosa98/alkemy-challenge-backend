const {
  comparePasswords,
  encryptPassword,
  generateToken,
  httpError,
} = require("../helpers");

class AuthService {
  constructor({ UserService }) {
    this.userService = UserService;
  }

  async signIn(email, password) {
    const userExists = await this.userService.getUserByEmail(email);

    if (!userExists) return httpError(401, "The email does not exist");

    const validPassword = comparePasswords(password, userExists.password);

    if (!validPassword) return httpError(401, "Password is incorrect");

    const token = generateToken(userExists.id);

    return { user: userExists, token };
  }

  async signUp(user) {
    const userExists = await this.userService.getUserByEmail(user.email);

    if (userExists) return httpError(400, "The email already exists");

    user.password = encryptPassword(user.password);
    const createdUser = await this.userService.create(user);

    return { user: createdUser };
  }
}

module.exports = AuthService;
