const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require(".");

const Category = sequelize.define('Category', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},
{
    timestamp: true,
    paranoid: true,
}
);
module.exports = Category
