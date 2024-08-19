import express from 'express';
import config from './config';

const server = express();

const PORT = config.PORT;
const BASE_URL = config.BASE_URL;

server.get('/', (_req, res) => {
  res.send('this is the root of the api');
});

server.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}:${PORT}`);
});
