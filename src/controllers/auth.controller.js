let _authService = null;

class UserController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const creds = await _authService.signIn(email, password);
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
      const registeredUser = await _authService.signUp(user);
      res.status(201).send(registeredUser);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }
}

module.exports = UserController;
