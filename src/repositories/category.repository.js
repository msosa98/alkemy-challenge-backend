const BaseRepository = require("./base.repository");

class CategoryRepository extends BaseRepository {
  constructor({ CategoryModel }) {
    super(CategoryModel);
    this.categoryModel = CategoryModel;
  }
}

module.exports = CategoryRepository;