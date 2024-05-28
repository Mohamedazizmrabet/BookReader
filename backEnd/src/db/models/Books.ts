import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
export default (sequelize: Sequelize) => {
  const Book = sequelize.define("Book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numberOfPages: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Book;
};
