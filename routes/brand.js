const brandRoute = require("express").Router();
const BrandController = require("../controllers/BrandController");

brandRoute.get("/", BrandController.getBrands);
brandRoute.post("/create", BrandController.create);
brandRoute.post("/update/:id", BrandController.editBrand);
brandRoute.get("/remove/:id", BrandController.deleteBrand);
module.exports = brandRoute;
