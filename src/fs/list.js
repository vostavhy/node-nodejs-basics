import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { fsError } from '../utils/constants.js';
import path from 'path';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const filesFolder = path.join(__dirname, 'files');
    const fileNames = await readdir(filesFolder, { withFileTypes: true });
    console.log(fileNames.map((element) => element.name));
  } catch {
    throw fsError;
  }
};
