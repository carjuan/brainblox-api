import dotenv from 'dotenv';

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

dotenv.config({ path: `./${envFile}` });

const getNodeEnv = () => {
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.NODE_ENV !== 'production'
  ) {
    throw new Error('NODE_ENV must be either "development" or "production"');
  }

  return process.env.NODE_ENV;
};

const nodeEnv = getNodeEnv();

interface Config {
  MONGO_URI: string | undefined;
  PORT: string | undefined;
  NODE_ENV: 'development' | 'production';
  BASE_URL?: string;
}

const config: Config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  NODE_ENV: nodeEnv,
  BASE_URL: process.env.BASE_URL,
};

export default config;
