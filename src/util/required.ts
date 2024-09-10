export type Required = (value: string, message?: string) => void;

export const required: Required = (value: string, message?: string): void => {
  let requiredMessage = '';

  if (message) {
    requiredMessage = `${message} :`;
  }

  requiredMessage = `${requiredMessage}${value}`;

  throw new Error(requiredMessage);
};
