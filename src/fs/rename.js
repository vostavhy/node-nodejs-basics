import { access, rename as promiseRename } from 'fs/promises';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
import { fsError } from '../utils/constants.js';
import path from 'path';

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const currentFile = path.join(__dirname, 'files', 'wrongFilename123.txt');
  const newFile = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await access(newFile, constants.F_OK);
    throw fsError;
  } catch {
    try {
      await promiseRename(currentFile, newFile);
    } catch (error) {
      throw fsError;
    }
  }
};

rename();
