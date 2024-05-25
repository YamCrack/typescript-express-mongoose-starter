import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASS } from '@config';
import { ConnectOptions } from 'mongoose';

export interface IDatabase {
  url: string;
  options?: ConnectOptions;
}

export const dbConnection: IDatabase = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    user: DB_USER,
    pass: DB_PASS,
  },
};
