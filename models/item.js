"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Brand, { foreignKey: "brand_id", as: "brands" });
      Item.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      license_plate: DataTypes.STRING,
      color: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      image: DataTypes.STRING,
      brand_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
