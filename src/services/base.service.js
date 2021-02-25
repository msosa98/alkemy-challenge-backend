class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  getAll() {
    return this.repository.getAll();
  }

  getById(id) {
    return this.repository.getById(id);
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