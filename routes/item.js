const itemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");

itemRoute.get("/", ItemController.getItems);
itemRoute.post("/create", ItemController.createItem);
itemRoute.post("/update/:id", ItemController.updateItem);
itemRoute.get("/remove/:id", ItemController.deleteItem);
module.exports = itemRoute;
