const BaseService = require("./base.service");

class CategoryService extends BaseService {
  constructor({ CategoryRepository }) {
    super(CategoryRepository);
    this.categoryRepository = CategoryRepository;
  }
}

module.exports = CategoryService;