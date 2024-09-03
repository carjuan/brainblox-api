import dotenv from 'dotenv';

type NodeEnv = 'development' | 'production';

interface Config {
  MONGO_URI: string | undefined;
  PORT: string | undefined;
  NODE_ENV: NodeEnv;
  BASE_URL?: string;
}

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

dotenv.config({ path: `./${envFile}` });

const getNodeEnv = (): NodeEnv => {
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.NODE_ENV !== 'production'
  ) {
    throw new Error('NODE_ENV must be either "development" or "production"');
  }

  return process.env.NODE_ENV;
};

const config: Config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  NODE_ENV: getNodeEnv(),
  BASE_URL: process.env.BASE_URL,
};

export default config;
