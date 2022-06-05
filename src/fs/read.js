import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { fsError } from '../utils/constants.js';
import path from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const txt = await readFile(fileToRead, { encoding: 'utf8' });
    console.log(txt);
  } catch {
    throw fsError;
  }
};

read();
