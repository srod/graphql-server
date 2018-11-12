import mongoose from 'mongoose';
import Client from './client';
import User from './user';

mongoose.Promise = global.Promise;

export const startDatabase = ({ user, pwd, url, db }) =>
  mongoose.connect(
    `mongodb://${user}:${pwd}@${url}/${db}`,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  );

export const models = {
  Client,
  User
};
