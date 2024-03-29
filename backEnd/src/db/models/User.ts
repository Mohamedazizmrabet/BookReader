import { Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  const User = sequelize.define('User', {
    username: {
      type: 'STRING',
      allowNull: false
    },
    birthday: {
      type: 'DATE',
      allowNull: true
    }
  });

  return User;
};
