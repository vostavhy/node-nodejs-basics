import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';
import { fsError } from '../utils/constants.js';
import path from 'path';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    await writeFile(
      path.join(__dirname, 'files', 'fresh.txt'),
      'I am fresh and young',
      { flag: 'ax' }
    );
  } catch (error) {
    throw fsError;
  }
};

create();
