import Worker from './example.js?worker';

// 1. 初始化 Worker 实例
const worker = new Worker();

// 2. 主线程监听 worker 的信息
worker.addEventListener('message', (e) => {
  console.log(e);
});

export function Header() {
  return <div>我是 header</div>;
}
