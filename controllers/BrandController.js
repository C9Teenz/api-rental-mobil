const { Brand } = require("../models");
class BrandController {
  static async getBrands(req, res) {
    try {
      let brands = await Brand.findAll();
      res.status(200).json(brands);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res) {
    try {
      const { name } = req.body;
      const brand = await Brand.create({ name });
      res.status(200).json({ message: "Create Success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async editBrand(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      const brand = await Brand.findByPk(id);

      await brand.update({ name });

      res.status(200).json({ message: "Update Success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteBrand(req, res) {
    try {
      const id = +req.params.id;
      const brand = await Brand.findByPk(id);
      await brand.destroy();
      res.status(200).json({ message: "Delete Success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = BrandController;
