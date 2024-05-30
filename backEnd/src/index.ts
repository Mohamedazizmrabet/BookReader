import express, { Express, Request, Response } from "express";
//start here
import sequelize from "./db/index";
import fileRouter from "./routes/fileRoute";
import cors from "cors";
import multer from "multer";
const app: Express = express();

const port = 3000;
//* Middlewares
app.use(cors());
app.use(express.json());
const upload = multer();
//* routes
app.use("/file", upload.single("file"), fileRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// Synchronize the models with the database
// sequelize.sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synchronized successfully.");
//   })
//   .catch((err) => {
//     console.error("Error synchronizing database:", err);
//   });
