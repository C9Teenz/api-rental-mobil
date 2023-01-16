const brandRoute = require("express").Router();
const BrandController = require("../controllers/BrandController");

brandRoute.get("/", BrandController.getBrands);
brandRoute.get("/:id", BrandController.getBrandById);
brandRoute.post("/create", BrandController.create);
brandRoute.put("/update/:id", BrandController.editBrand);
brandRoute.delete("/remove/:id", BrandController.deleteBrand);
module.exports = brandRoute;
