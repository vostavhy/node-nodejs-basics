const fsError = new Error('FS operation failed');
import { fileURLToPath } from 'url';
import path from 'path';

const getDirName = (url) => {
  return path.dirname(fileURLToPath(url));
};

export { fsError, getDirName };
