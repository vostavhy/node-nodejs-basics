import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const output = createWriteStream(filePath);
  stdin.pipe(output);
};
