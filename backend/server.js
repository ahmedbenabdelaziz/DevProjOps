const express = require('express');
import { sequelize } from './models/index.js';
import employeeRoutes from './routes/employee.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

// Synchronization and start the server
sequelize.sync({ force: false })  // Set 'alter: true' if necessary for altering the schema
  .then(() => {
    console.log('✅ Database synchronized');
    app.listen(5000, () => { // Au lieu de 3000
      console.log('🚀 Server running at http://localhost:5000');
    });
  })
  .catch(err => {
    console.error('❌ Synchronization error:', err);
    process.exit(1);
  });
