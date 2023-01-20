/* eslint-disable max-len */
import React from 'react';
import Square from './Square';
import Result from './Result';

function TicTacToe() {
  const empty = 'EMPTY';
  const circle = 'CIRCLE';
  const cross = 'CROSS';

  const [state, setState] = React.useState({
    player: circle,
    positions: [
      empty,
      empty,
      empty,
      empty,
      empty,
      empty,
      empty,
      empty,
      empty,
    ],
  });

  function reset() {
    setState({
      player: circle,
      positions: [
        empty,
        empty,
        empty,
        empty,
        empty,
        empty,
        empty,
        empty,
        empty,
      ],
    });
  }

  function checkWinner(positions) {
    if (positions[0] === circle && positions[1] === circle && positions[2] === circle) return circle;
    if (positions[3] === circle && positions[4] === circle && positions[5] === circle) return circle;
    if (positions[6] === circle && positions[7] === circle && positions[8] === circle) return circle;

    if (positions[0] === circle && positions[3] === circle && positions[6] === circle) return circle;
    if (positions[1] === circle && positions[4] === circle && positions[7] === circle) return circle;
    if (positions[2] === circle && positions[5] === circle && positions[8] === circle) return circle;

    if (positions[0] === circle && positions[4] === circle && positions[8] === circle) return circle;
    if (positions[2] === circle && positions[4] === circle && positions[6] === circle) return circle;

    if (positions[0] === cross && positions[1] === cross && positions[2] === cross) return cross;
    if (positions[3] === cross && positions[4] === cross && positions[5] === cross) return cross;
    if (positions[6] === cross && positions[7] === cross && positions[8] === cross) return cross;

    if (positions[0] === cross && positions[3] === cross && positions[6] === cross) return cross;
    if (positions[1] === cross && positions[4] === cross && positions[7] === cross) return cross;
    if (positions[2] === cross && positions[5] === cross && positions[8] === cross) return cross;

    if (positions[0] === cross && positions[4] === cross && positions[8] === cross) return cross;
    if (positions[2] === cross && positions[4] === cross && positions[6] === cross) return cross;

    if (positions[0] !== empty && positions[1] !== empty && positions[2] !== empty
        && positions[3] !== empty && positions[4] !== empty && positions[5] !== empty
        && positions[6] !== empty && positions[7] !== empty && positions[8] !== empty
    ) return 'Tie';

    return 'play';
  }

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;
    setState({
      player: state.player === circle ? cross : circle,
      positions,
    });
  }

  const winner = checkWinner(state.positions);

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gridTemplateRows: 'auto auto auto',
          columnGap: '10px',
          rowGap: '10px',
          backgroundColor: 'lightgray',
        }}
      >
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {winner !== 'play' && <Result winner={winner} reset={reset} />}
    </div>

  );
}

export default TicTacToe;
