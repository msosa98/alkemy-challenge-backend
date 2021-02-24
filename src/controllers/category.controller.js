const BaseController = require("./base.controller");

class CategoryController extends BaseController {
  constructor({ CategoryService }) {
    super(CategoryService);
    this.categoryService = CategoryService;
  }
}

module.exports = CategoryController;