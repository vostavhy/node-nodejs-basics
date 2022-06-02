import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToRead = path.join(__dirname, 'files', 'archive.gz');
  const pathToWrite = path.join(__dirname, 'files', 'fileToCompress.txt');

  const input = createReadStream(pathToRead);
  const output = createWriteStream(pathToWrite);
  const unzip = createUnzip();

  const pipe = promisify(pipeline);

  await pipe(input, unzip, output);
};
