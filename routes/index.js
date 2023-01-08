const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({ message: "home" });
});
const itemRouter = require("./item");
route.use("/api/item", itemRouter);
const userRouter = require("./user");
route.use("/api/user", userRouter);
const brandRouter = require("./brand");
route.use("/api/brand", brandRouter);

module.exports = route;
