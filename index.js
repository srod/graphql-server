import { GraphQLServer } from 'graphql-yoga';
import { startDatabase, models } from './database';
import { resolvers, typeDefs } from './graphql';

const database = startDatabase({
  user: 'user',
  pwd: 'pwd',
  db: 'graphql',
  url: 'localhost:27017'
});

const Server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { models, database }
});

// options
const opts = { port: 4000 };

Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`);
});
