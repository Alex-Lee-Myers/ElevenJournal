const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:46acef601cb74c059efd3b9e39e23e9e@localhost:5432/eleven-journal");

module.exports = sequelize;