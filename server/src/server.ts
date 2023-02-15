import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env;

app.get('/', (req:Request, res: Response) => {
    res.status(200).send('All good to go!');
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is Listening on Port ${port}`);
})




