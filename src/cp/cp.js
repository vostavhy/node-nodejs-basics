import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToScript = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
  const childProcess = fork(pathToScript, args.slice(2), { silent: true });
  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);
};
