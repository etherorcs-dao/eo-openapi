import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import {
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import schema from '../../db/schema';
import client from '../../db/client';

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();
const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault()],
});
const startServer = apolloServer.start();

// eslint-disable-next-line consistent-return
export default cors(async (req, res) => {
  await client();
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});
