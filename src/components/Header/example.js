const start = () => {
  let count = 0;
  setInterval(() => {
    postMessage(++count);
  }, 5000);
};

start();
