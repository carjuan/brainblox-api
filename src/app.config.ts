import dotenv from 'dotenv';
import { getValueFromEnv } from './util';

type NodeEnv = 'development' | 'production';

interface Config {
  MONGO_URI: string;
  PORT: string;
  NODE_ENV: NodeEnv;
  DB_NAME: string;
  ALLOWED_CORS_ORIGIN: Array<string>;
}

const getNodeEnv = (): NodeEnv => {
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.NODE_ENV !== 'production'
  ) {
    throw new Error('NODE_ENV must be either "development" or "production"');
  }

  return process.env.NODE_ENV;
};

const getAllowedOrigins = (origins: string) => {
  return origins.split(',').map((origin: string): string => origin.trim());
};

const notifyConfig = (config: Config): void => {
  console.log('Configuration loaded');
  console.dir(config);
};

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

const nodeEnv: NodeEnv = getNodeEnv();

dotenv.config({ path: `./${envFile}` });

const config: Config = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  PORT: process.env.PORT || '3000',
  NODE_ENV: nodeEnv,
  DB_NAME: getValueFromEnv('DB_NAME', process.env),
  ALLOWED_CORS_ORIGIN: getAllowedOrigins(
    getValueFromEnv('CORS_ORIGIN', process.env),
  ),
};

notifyConfig(config);

export { config };
