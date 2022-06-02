import { env } from 'process';

export const parseEnv = () => {
  const resultArr = Object.entries(env)
    .filter(([key, value]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(resultArr);
};
