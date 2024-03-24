import { Sequelize, Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  return User;
};
