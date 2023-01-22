const { Login } = require("../models");
const jwt = require("jsonwebtoken");
class LoginController {
  static async create(req, res) {
    try {
      const { username, password } = req.body;

      let createUser = await Login.create({
        username,
        password,
      });
      res
        .status(200)
        .json({ message: "user berhasil dibuat", data: createUser });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await Login.findOne({ where: { username, password } });
      if (!user) {
        return res.json({
          status: false,
          data: {},
          error: "User tidak ditemukan",
        });
      }
      const secret = "secretKey";
      const token = jwt.sign({ id: user.id }, secret);

      return res.status(200).json({
        status: true,
        data: {
          token,
        },
        error: "",
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async get(req, res) {
    try {
      const getAll = await Login.findAll();
      res.status(200).json(getAll);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = LoginController;
