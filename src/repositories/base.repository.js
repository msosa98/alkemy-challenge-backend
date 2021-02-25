class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  get() {
    return this.model.findAll();
  }

  getById(id) {
    return this.model.findByPk(id);
  }

  create(model) {
    return this.model.create(model);
  }

  async delete(id) {
    const modelDB = await this.model.findByPk(id);
    return modelDB.destroy();
  }

  async update(id, newModel) {
    const modelDB = await this.model.findByPk(id);
    return await modelDB.update(newModel);
  }
}

module.exports = BaseRepository;