const { User } = require("../models");

class UserController {
  static async getUsers(req, res) {
    try {
      const user = await User.findAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async createUser(req, res) {
    try {
      const { name, telphone, image } = req.body;

      let user = await User.create({
        name,
        telphone,
        image,
      });
      res.status(200).json({ message: "Create Succes" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async updateUser(req, res) {
    try {
      const { name, telphone, image } = req.body;
      const id = req.params.id;
      const user = await User.findByPk(id);
      await user.update({
        name: name,
        telphone: telphone,
        image: image,
      });
      res.status(200).json({ message: "Update Succes" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);
      await user.destroy();
      res.status(200).json({ message: "Delete Succes" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
