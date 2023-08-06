import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './users/router';
import coachRouter from './coaches/router';
import loginRouter from './auth/router';

const app: Express = express();
const { PORT } = process.env;

function defaultRoute(req: Request, res: Response) {
  res.status(404).send("you didn't hit any middleware you idiot");
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/users', userRouter);
app.use('/coaches', coachRouter);
app.use('/auth', loginRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('All good to go!');
});

// right at the end
app.use(defaultRoute);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Listening on Port ${PORT}`);
});
