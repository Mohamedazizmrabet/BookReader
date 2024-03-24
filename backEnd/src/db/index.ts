import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './models/User'
// Initialize Sequelize with your database credentials
const sequelize = new Sequelize('books', 'mrabet', 'clavier123', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define your model
 UserModel(sequelize)



export default sequelize; // Export Sequelize instance if needed elsewhere
