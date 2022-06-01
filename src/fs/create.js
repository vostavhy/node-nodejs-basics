import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  try {
    await writeFile(
      path.join(__dirname, 'files', 'fresh.txt'),
      'I am fresh and young',
      { flag: 'ax' }
    );
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

create();
