import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

function Square({ position, value, takeTurn }) {
  const circle = 'CIRCLE';
  const cross = 'CROSS';
  const empty = 'EMPTY';

  function handleClick() {
    if (value === empty) {
      takeTurn(position);
    }
  }

  return (
    <div
      style={{
        width: '110px',
        height: '110px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      { value === circle && <Circle /> }
      { value === cross && <Cross /> }

    </div>
  );
}

export default Square;
