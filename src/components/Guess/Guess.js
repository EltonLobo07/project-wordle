import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ children, answer }) {
  const checkedChildren = children && checkGuess(children, answer);

  return (
    <p
      className = "guess"
    >
      {range(0, 5).map(idx => (
        <span
          key = {idx}
          className = {`cell ${checkedChildren ? checkedChildren[idx].status : ""}`.trimEnd()}
        >
          {checkedChildren && checkedChildren[idx].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
