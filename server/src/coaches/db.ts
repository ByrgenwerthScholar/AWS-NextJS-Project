import pool from '../pg';
import { Coach } from '../../../types';

export const get = async (): Promise<Coach[]> => {
  const { rows } = await pool.query(/* sql */ `
        SELECT 
            id::text, name
        FROM 
            coaches
    `);
  return rows;
};

export const getById = async (coachId: string): Promise<Coach> => {
  const { rows } = await pool.query(
    /* sql */ `
    SELECT 
      id::text, name
    FROM
      coaches
    WHERE
      id = $1;
    `,
    [coachId]
  );
  return rows[0];
};

export const post = async (coach: Coach): Promise<string> => {
  const { rows } = await pool.query(
    /* sql */ `
    INSERT INTO coaches
      (name)
    VALUES
      ($1)
    RETURNING id::text
    `,
    [coach.name]
  );
  return rows[0].id;
};
