import { MongoClient, ServerApiVersion } from 'mongodb';

import { config } from '../../../app.config';

const uri = config.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    client.connect();
    await client.db('brainblox').command({ ping: 1 });
    console.log(
      `You successfully connected to the database in ${config.NODE_ENV} mode. Connection string used: ${config.MONGO_URI}`,
    );
  } catch (error) {
    console.error(
      `Could not connect to the database in ${config.NODE_ENV}, see error: ${error}`,
    );
    process.exit(1);
  } finally {
    await client.close();
  }
}

export { run };
