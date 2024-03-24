import { Sequelize, DataTypes } from 'sequelize';
import confing from './confing';
// Initialize Sequelize with your database credentials
const sequelize = new Sequelize(confing.dbName, confing.dbUser, confing.dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

// Define your model
 sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false // Example constraint, adjust as needed
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true // Example constraint, adjust as needed
  }
});



export default sequelize; // Export Sequelize instance if needed elsewhere
