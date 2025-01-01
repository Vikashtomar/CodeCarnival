import express from 'express';
import db from './models/index.js'; // Import the db object from index.js

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import and use the routes
import userRoutes from './routes/userRoute.js';
app.use('/api', userRoutes);

// Sync models with database (create tables if they do not exist)
db.sequelize.sync({ force: false })  // Set force: true to drop and recreate the tables on startup
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error.message);
  });

// Handle 404 errors if the route is not found
app.use((req, res) => {
  res.status(404).json({ status: false, message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
