let _userService = null;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const creds = await _userService.signIn(email, password);
      res.status(200).send(creds);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async signUp(req, res) {
    try {
      const user = req.body;
      const registeredUser = await _userService.signUp(user);
      res.status(201).send(registeredUser);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }
}

module.exports = UserController;
