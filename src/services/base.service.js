class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  findAll() {
    return this.repository.findAll();
  }

  findByPk(id) {
    return this.repository.findByPk(id);
  }

  create(repository) {
    return this.repository.create(repository);
  }

  delete(id) {
    return this.repository.delete(id);
  }

  update(id, model) {
    return this.repository.update(id, model);
  }
}

module.exports = BaseService;