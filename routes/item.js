const itemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");

itemRoute.get("/", ItemController.getItems);
itemRoute.get("/:id", ItemController.getItemById);
itemRoute.post("/create", ItemController.createItem);
itemRoute.put("/update/:id", ItemController.updateItem);
itemRoute.put("/update-user/:id", ItemController.updateItemUserId);
itemRoute.delete("/remove/:id", ItemController.deleteItem);
module.exports = itemRoute;
