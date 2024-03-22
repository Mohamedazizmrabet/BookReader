import { Sequelize, DataTypes } from 'sequelize';

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize('books', 'mrabet', 'clavier123', {
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
