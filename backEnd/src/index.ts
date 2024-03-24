import express, { Express, Request, Response } from 'express';
//start here
import sequelize  from './db/index';


const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express + TypeScript!');
});



// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err:any) => {
    console.error("Unable to connect to the database:", err);
  });

// Synchronize the models with the database
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log("Database synchronized successfully.");
//   })
//   .catch((err) => {
//     console.error("Error synchronizing database:", err);
//   });
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
