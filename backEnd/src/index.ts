import express, { Express, Request, Response } from 'express';
//start here

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express + TypeScript!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
