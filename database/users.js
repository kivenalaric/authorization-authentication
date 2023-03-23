const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailAddress: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      apiKey: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      adminUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      }
    },
    {
      timestamp: true,
      paranoid: true,
    }
);

module.exports = User
