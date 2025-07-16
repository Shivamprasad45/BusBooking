const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Payment = sequelize.define('Payment', {
  bookingId: DataTypes.INTEGER,
  amount: DataTypes.FLOAT,
  status: DataTypes.STRING,
});

module.exports = Payment;