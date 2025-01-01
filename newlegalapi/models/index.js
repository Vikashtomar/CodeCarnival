import { Sequelize } from 'sequelize';
import config from '../config/config.json' assert { type: 'json' };  // Import the config with JSON assertion

// Determine the environment (default to 'development')
const env = process.env.NODE_ENV || 'development'; // You can set NODE_ENV=production or NODE_ENV=development in your environment
const configEnv = config[env]; // Get the configuration based on the environment (development, test, production)

// Create a new Sequelize instance using the appropriate config
const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
  port: configEnv.port,
});

// Import and initialize models
import User from './userModel.js'; // Import the User model (replace with your own model files as needed)
const db = {
  sequelize,
  Sequelize,
  User: User(sequelize),  // Pass the sequelize instance to the User model
};

export default db;
