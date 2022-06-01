import { copyFile, mkdir, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { fsError } from '../utils/constants.js';
import path from 'path';

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const filesFolder = path.join(__dirname, 'files');
    const copyFolder = path.join(__dirname, 'files_copy');

    await mkdir(copyFolder);
    const fileNames = await readdir(filesFolder, { withFileTypes: true });
    console.log(fileNames);

    for (let file of fileNames) {
      await copyFile(
        path.join(filesFolder, file.name),
        path.join(copyFolder, file.name)
      );
    }
  } catch (error) {
    console.log(error);
    throw fsError;
  }
};

copy();
