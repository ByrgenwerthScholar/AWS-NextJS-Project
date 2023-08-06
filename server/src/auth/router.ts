import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import key from './oauth';

const router = express.Router();

router.use(cookieParser());
router.use(cors());

router.get('/', (req: Request, res: Response) => {
  const csrfState = Math.random().toString(36).substring(2);
  res.cookie('csrfState', csrfState, { maxAge: 60000 });
  console.log('Server Check-Point Was Hit');

  let url = 'https://www.tiktok.com/auth/authorize/';

  url += `?client_key=${key}`;
  url += '&scope=user.info.basic';
  url += '&response_type=code';
  url += '&redirect_uri=localhost:5173';
  url += `&state=${csrfState}`;

  return res.send(url);
});

export default router;
