const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");
userRoute.get("/", UserController.getUsers);
userRoute.get("/:id", UserController.getUserById);
userRoute.post("/create", UserController.createUser);
userRoute.put("/update/:id", UserController.updateUser);
userRoute.delete("/remove/:id", UserController.deleteUser);

module.exports = userRoute;
