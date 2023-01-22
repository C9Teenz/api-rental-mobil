const loginRoute = require("express").Router();
const LoginController = require("../controllers/LoginController");
loginRoute.get("/", LoginController.get);
loginRoute.post("/login", LoginController.login);
loginRoute.post("/create", LoginController.create);

module.exports = loginRoute;
