const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require(".");

const Glass = sequelize.define('Glass', {
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
  }
},
{
    timestamp: true,
    paranoid: true,
}
);
module.exports = Glass
