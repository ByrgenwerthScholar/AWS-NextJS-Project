import pool from '../pg';
import { User } from '../../../types';

export const get = async (): Promise<User[]> => {
  const { rows } = await pool.query(/* sql */ `
        SELECT 
            id::text, name, tt_username
        FROM 
            users
    `);
  return rows;
};

export const getById = async (userId: string): Promise<User> => {
  const { rows } = await pool.query(
    /* sql */ `
    SELECT 
      id::text, name, tt_username
    FROM
      users
    WHERE
      id = $1;
    `,
    [userId]
  );
  return rows[0];
};

export const post = async (user: User): Promise<string> => {
  const { rows } = await pool.query(
    /* sql */ `
    INSERT INTO users
      (name, tt_username)
    VALUES
      ($1, $2)
    RETURNING id::text
    `,
    [user.name, user.tt_username]
  );
  return rows[0].id;
};
