import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { Button } from './assets/components/Button';
import { ShowItem } from './assets/components/Show';
import { ForEach } from './assets/components/ForEach';

const App: Component = () => {
  return (
    <div >
      <a
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
      <Button />
      <ShowItem />
      <ForEach />
    </div>
  );
};

export default App;
