/* eslint-disable max-len */
import './App.css';

import React from 'react';
import TicTacToe from './Widgets/TicTacToe';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <TicTacToe />
    </div>
  );
}

export default App;
