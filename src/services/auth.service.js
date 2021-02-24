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
    if (!email || !password)
      return httpError(400, "The username and password is required");

    const userExists = await this.userService.getUserByEmail(email);

    if (!userExists) return httpError(401, "The email does not exist");

    const validPassword = comparePasswords(password, userExists.password);

    if (!validPassword) return httpError(401, "Password is incorrect");

    const token = generateToken(userExists.id);

    return {
      user: {
        id: userExists.id,
        firstname: userExists.firstname,
        lastname: userExists.lastname,
        email: userExists.email,
      },
      token,
    };
  }

  async signUp(user) {
    if (!user.firstname || !user.lastname || !user.email || !user.password)
      return httpError(400, "Missing fields");

    const userExists = await this.userService.getUserByEmail(user.email);

    if (userExists) return httpError(400, "The email already exists");

    user.password = encryptPassword(user.password);
    const createdUser = await this.userService.create(user);

    return {
      user: {
        id: createdUser.id,
        firstname: createdUser.firstname,
        lastname: createdUser.lastname,
        email: createdUser.email,
      },
    };
  }
}

module.exports = AuthService;
