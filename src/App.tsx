import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { Button } from './assets/components/App';

const App: Component = () => {
  const [first, setFirst] = createSignal("JSON")



  return (
    <div >
      <a
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
      {first}
      <Button />
    </div>
  );
};

export default App;
