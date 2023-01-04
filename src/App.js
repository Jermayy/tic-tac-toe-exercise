import './App.css';

import React from 'react';

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

function TicTacToe() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridTemplateRows: 'auto auto auto',
        columnGap: '10px',
        rowGap: '10px',
      }}
    >
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

function Square() {
  return (
    <div
      style={{
        width: '110px',
        height: '110px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Square
    </div>
  );
}

function Circle() {
  return <div>Circle</div>;
}

function Cross() {
  return <div>Cross</div>;
}
function Result() {
  return <div>Cross</div>;
}

export default App;
