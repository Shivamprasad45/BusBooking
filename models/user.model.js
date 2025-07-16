const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
});

module.exports = User;
