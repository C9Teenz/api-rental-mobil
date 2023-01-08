const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");
userRoute.get("/", UserController.getUsers);
userRoute.post("/create", UserController.createUser);
userRoute.post("/update/:id", UserController.updateUser);
userRoute.get("/remove/:id", UserController.deleteUser);

module.exports = userRoute;
