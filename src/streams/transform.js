import { stdin, stdout } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  const reverseString = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  };

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(String(chunk)));
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

transform();
