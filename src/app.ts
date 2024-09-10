import express from 'express';
import cors from 'cors';
import workspacesRoutes from './api/v1/workspaces/routes';
import { connectDB } from './db';
import { config } from './app.config';

const server = express();

server.use(
  cors({
    origin: config.ALLOWED_CORS_ORIGIN,
    credentials: true,
  }),
);

server.use(express.json({ limit: '16kb' }));
server.use(express.urlencoded({ extended: true, limit: '16kb' }));

server.use('/api/v1/workspaces', workspacesRoutes);

server.use('*', (_, res) => {
  res.status(404).json({ message: 'bad request' });
});

export const app = {
  start: () => {
    connectDB()
      .then(() => {
        server.listen(config.PORT, () => {
          console.log(`server is running on port:${config.PORT}`);
        });
      })
      .catch((error) => {
        console.log('mongodb connection error', error);
      });
  },
};
