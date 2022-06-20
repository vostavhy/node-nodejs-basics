import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToWorker = path.join(__dirname, 'worker.js');

const createWorker = (m) => {
  return new Promise((resolve, reject) => {
    let w = new Worker(pathToWorker);
    w.postMessage(m);
    w.on('message', (msg) => {
      resolve(msg);
    });
    w.on('error', (msg) => {
      reject(msg);
    });
  });
};

export const performCalculations = async () => {
  const cpusNumber = os.cpus().length;

  const promises = [];

  for (let i = 0; i < cpusNumber; i++) {
    promises.push(createWorker(10 + i));
  }

  let results = await Promise.allSettled(promises);
  results = results.map(({ status, value }) => {
    if (status === 'fulfilled') {
      return { status: 'resolved', data: value };
    }
    return { status: 'error', data: null };
  });

  return results;
};

console.log(await performCalculations());
