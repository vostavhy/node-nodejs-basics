import { argv } from 'process';

export const parseArgs = () => {
  const newArg = argv.slice(2);
  const resultArg = [];

  for (let i = 0; i < newArg.length; i += 2) {
    resultArg.push(`${newArg[i]} is ${newArg[i + 1]}`);
  }

  console.log(resultArg.join(', '));
};
