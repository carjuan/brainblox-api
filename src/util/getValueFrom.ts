export const getValueFromEnv = (
  key: string,
  env: NodeJS.ProcessEnv,
): string => {
  const value = env[key] as string;
  if (!value) {
    throw new Error(
      `Key: ${key as string} not found in .env.${env.NODE_ENV} file`,
    );
  }

  return value;
};
