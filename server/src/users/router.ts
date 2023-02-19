import express, { Request, Response } from 'express';
import { User } from '../../../types';
import { get, getById, post } from './db';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  let result;
  if (req.query.id === undefined) {
    result = await get();
    return res.send(result);
  }
  result = await getById(req.query.id.toString());
  return res.send(result);
});

router.post('/', async (req: Request, res: Response) => {
  try {
    if (req.body.name) {
      return res.status(200).send(await post(req.body as User));
    }
    throw new Error();
  } catch (e) {
    console.log(e);
    return res.status(400).send('Bad Request');
  }
});

export default router;
