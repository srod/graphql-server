import path from 'path';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, './resolvers'));
const typesArray = fileLoader(path.join(__dirname, './types'));

const resolvers = mergeResolvers(resolversArray);
const typeDefs = mergeTypes(typesArray, { all: true });

export { resolvers, typeDefs };
