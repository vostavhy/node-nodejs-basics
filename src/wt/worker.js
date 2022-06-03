import { parentPort } from 'worker_threads';

parentPort.on('message', (msg) => {
  const fbn = nthFibonacci(msg);
  sendResult(fbn);
});

// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (result) => {
  parentPort.postMessage(result);
};
