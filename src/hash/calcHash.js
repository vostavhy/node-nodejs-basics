import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import path from 'path';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const file = await readFile(filePath);

  hash.update(file);
  return hash.digest('hex');
};
