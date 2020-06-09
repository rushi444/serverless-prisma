import { hello, getUsers } from './query';
import { createUser } from './mutation';

export const resolvers = {
  Query: {
    hello: (root, args, context) => hello(args, context),
    users: (parent, args, context, info) => getUsers( context),
  },
  Mutation: {
    createUser: (parent, args, context, info) => createUser(args, context),
  },
};
