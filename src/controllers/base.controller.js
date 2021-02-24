let _service = null;

class BaseController {
  constructor(service) {
    _service = service;
  }

  async findAll(req, res) {
    try {
      const data = await _service.findAll();
      res.status(200).send(data);
    } catch (e) {
      console.log(e.message);
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async findByPk(req, res) {
    try {
      const { id } = req.params;
      const data = await _service.findByPk(id);
      res.status(200).send(data);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async create(req, res) {
    try {
      const model = req.body;
      const data = await _service.create(model);
      res.status(201).send(data);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await _service.delete(id);
      res.status(200).send(data);
    } catch (e) {
      console.log(e);
      res.status(e.status).json({
        error: e.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const model = req.body;
      const data = await _service.update(id, model);
      res.status(200).send(data);
    } catch (e) {
      res.status(e.status).json({
        error: e.message,
      });
    }
  }
}

module.exports = BaseController;
