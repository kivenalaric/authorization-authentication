const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require(".");

const Drink = sequelize.define('Drink', {
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
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  recipe: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Drink
