import { Sequelize, DataTypes } from 'sequelize';

import confing from './confing';
import UserModel from './models/User'
// Initialize Sequelize with your database credentials
const sequelize = new Sequelize(confing.dbName, confing.dbUser, confing.dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

// Define your model
 UserModel(sequelize)



export default sequelize; // Export Sequelize instance if needed elsewhere
