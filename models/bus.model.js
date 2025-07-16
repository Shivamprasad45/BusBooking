const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Bus = sequelize.define('Bus', {
  name: DataTypes.STRING,
  seats: DataTypes.INTEGER,
  availableSeats: DataTypes.INTEGER,
});

module.exports = Bus;
