import { readFile } from 'fs/promises';
import { fsError, getDirName } from '../utils/constants.js';
import path from 'path';

export const read = async () => {
  const __dirname = getDirName(import.meta.url);
  const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const txt = await readFile(fileToRead, { encoding: 'utf8' });
    console.log(txt);
  } catch (error) {
    throw fsError;
  }
};

read();
