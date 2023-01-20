import React from 'react';

function Result({ winner, reset }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3em',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'white',
        flexDirection: 'column',
      }}
    >
      {winner === 'CIRCLE' && 'Circle won the game!'}
      {winner === 'CROSS' && 'Cross won the game!'}
      {winner === 'Tie' && 'It\'s a Tie!'}
      <button
        onClick={reset}
        type="button"
        style={{
          padding: '10px',
          fontSize: '20px',
        }}
      >
        Play New Game
      </button>

    </div>
  );
}

export default Result;
