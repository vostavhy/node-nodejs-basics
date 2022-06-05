import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToRead = path.join(__dirname, 'files', 'fileToCompress.txt');
  const pathToWrite = path.join(__dirname, 'files', 'archive.gz');

  const input = createReadStream(pathToRead, 'utf-8');
  const output = createWriteStream(pathToWrite);
  const gzip = createGzip();

  const pipe = promisify(pipeline);

  await pipe(input, gzip, output);
};

compress();
