import { stdout } from 'process';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const input = createReadStream(filePath);
  input.pipe(stdout);
};
