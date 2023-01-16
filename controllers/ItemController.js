const { Item, Brand, User } = require("../models");
class ItemController {
  static async getItems(req, res) {
    try {
      const items = await Item.findAll({
        include: [
          {
            model: Brand,
            as: "brands",
          },
          { model: User, as: "users" },
        ],
        order: [["id", "asc"]],
      });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getItemById(req, res) {
    try {
      const id = +req.params.id;
      const item = await Item.findOne({
        where: { id: id },
        include: [
          {
            model: Brand,
            as: "brands",
          },
          { model: User, as: "users" },
        ],
        order: [["id", "asc"]],
      });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async createItem(req, res) {
    try {
      const {
        name,
        license_plate,
        color,
        rate,
        image,
        brand_id,
        user_id,
      } = req.body;
      let item = await Item.create({
        name,
        license_plate,
        color,
        rate,
        image,
        brand_id,
        user_id,
      });
      res.status(200).json({ message: "Create Success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async updateItem(req, res) {
    try {
      const {
        name,
        license_plate,
        color,
        rate,
        image,
        brand_id,
        user_id,
      } = req.body;
      const id = +req.params.id;
      const item = await Item.findByPk(id);
      await item.update({
        name,
        license_plate,
        color,
        rate,
        image,
        brand_id,
        user_id,
      });
      res.status(200).json({ message: "Update Success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async updateItemUserId(req, res) {
    try {
      const id = +req.params.id;
      const { user_id } = req.body;
      let userId = await Item.findByPk(id);
      await userId.update({ user_id });
      res.status(200).json({ message: "Update Success" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteItem(req, res) {
    try {
      const id = +req.params.id;
      const item = await Item.findByPk(id);
      await item.destroy();
      res.status(200).json("Delete Succes");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = ItemController;
