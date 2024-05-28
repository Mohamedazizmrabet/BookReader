import { Sequelize, Model, DataTypes } from "sequelize";

import confing from "./confing";
import UserModel from "./models/User";
import ContentModel from "./models/Content";
import BooksModel from "./models/Books";
// Initialize Sequelize with your database credentials
const sequelize = new Sequelize(
  confing.dbName,
  confing.dbUser,
  confing.dbPassword,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Define your model
const User = UserModel(sequelize);
const Content = ContentModel(sequelize);
const Books = BooksModel(sequelize);

Books.hasMany(Content);
Content.belongsTo(Books);
interface IModels {
  User: typeof User;
  Content: typeof Content;
  Books: typeof Books;
  sequelize: typeof sequelize;
}
const objModels: IModels = {
  User,
  Content,
  Books,
  sequelize,
};

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });

export default objModels; // Export Sequelize instance if needed elsewhere
