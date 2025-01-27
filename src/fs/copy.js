import { copyFile, mkdir, readdir } from 'fs/promises';
import { fsError, getDirName } from '../utils/constants.js';
import path from 'path';

export const copy = async () => {
  const __dirname = getDirName(import.meta.url);

  try {
    const filesFolder = path.join(__dirname, 'files');
    const copyFolder = path.join(__dirname, 'files_copy');

    await mkdir(copyFolder);
    const fileNames = await readdir(filesFolder, { withFileTypes: true });

    for (let file of fileNames) {
      await copyFile(
        path.join(filesFolder, file.name),
        path.join(copyFolder, file.name)
      );
    }
  } catch (error) {
    throw fsError;
  }
};

copy();
