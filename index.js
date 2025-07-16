const express = require('express');
const sequelize = require('./models');
const User = require('./models/user.model');
const Bus = require('./models/bus.model');

const userRoutes = require('./routes/user.routes');
const busRoutes = require('./routes/bus.routes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

const PORT = 3000;

sequelize.sync({ force: true }).then(async () => {
  console.log('📦 DB synced');

  // ➕ Insert Sample Data
  await User.bulkCreate([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
  ]);

  await Bus.bulkCreate([
    { name: 'Volvo', seats: 50, availableSeats: 30 },
    { name: 'Mercedes', seats: 40, availableSeats: 8 },
  ]);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
