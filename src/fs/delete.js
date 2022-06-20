import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { fsError } from '../utils/constants.js';
import path from 'path';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const currentFile = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(currentFile);
  } catch {
    throw fsError;
  }
};

remove();
