import express from 'express';
import config from './config';
import workspacesRoutes from './api/v1/workspaces/routes';

const server = express();

const PORT = config.PORT;
const BASE_URL = config.BASE_URL;

server.get('/', (_req, res) => {
  res.send('this is the root of the api');
});

server.use('/api/v1/workspaces', workspacesRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}:${PORT}`);
});
