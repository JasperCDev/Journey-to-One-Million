import { client } from './index';
import { Request, Response } from 'express';
import { QueryResult, QueryResultRow } from 'pg';
import { createUser } from './controllers';
import fs from 'fs';
import path, { dirname } from 'path';

const sql = fs.readFileSync(path.join(__dirname, '../../journey-to-one-million.pqsql')).toString();

client.query(sql)
  .then((dbResponse: QueryResult) => console.log(dbResponse))
  .catch((err: QueryResultRow) => console.error(err));

client.query(('INSERT INTO global_clicks(click_count) VALUES(0)'))
  .then((dbResponse: QueryResult) => console.log(dbResponse))
  .catch((err: QueryResultRow) => console.error(err));

createUser({ body: { user_name: 'JasperBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'JosephBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'BethanyBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'DavidBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'KellieBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'JayBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'TimBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'JimenaBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body: { user_name: 'RileyBOT' } } as Request, { send: () => { } } as Response);

// createUser({ body:{ user_name: 'MarkBOT' } } as Request, { send: () => { } } as Response);