import { useState } from 'react';
// import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';
import TestPng from '/202403201441396.png';
import './App.css';
import { version } from '../package.json';
import { Header } from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={TestPng} alt="Vite logo" />
        </a>
        {/* <ReactLogoSvg /> */}
        version: {version}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
