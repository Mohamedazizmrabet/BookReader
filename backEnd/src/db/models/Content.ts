import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
export default (sequelize: Sequelize) => {
  const Content = sequelize.define("Content", {
    pageNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Content;
};
