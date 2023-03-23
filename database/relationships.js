const User = require('./users');
const Drink = require('./drinks');
const Category = require('./categories');
const Ingredient = require('./ingredients');
const Glass = require('./glass');
const sequelize = require('.');

function relate() {

    sequelize.sync();

    User.hasMany(Drink);
    Drink.belongsTo(User);

    Drink.belongsToMany(Category, { through: "drinks_categories" });
    Category.belongsToMany(Drink, { through: "drinks_categories" })

    Drink.belongsToMany(Ingredient, { through: "drinks_ingredients"});
    Ingredient.belongsToMany(Drink, { through: "drinks_ingredients" })

    Drink.belongsToMany(Glass, { through: "drinks_glasses" });
    Glass.belongsToMany(Drink, { through: "drinks_glasses" })

    sequelize.sync();
}

module.exports = relate;