import React from 'react';

function Banner(props) {
  return (
    <div
      className = {`banner ${props.type}`}
    >
      <p>
        {
          props.type === "happy"
          ? (
            <>
              <strong>Congratulations!</strong> Got it in
              {" "}
              <strong>{props.numGuesses} guess{`${props.numGuesses === 1 ? "" : "es"}`}</strong>.
            </>
          )
          : (
            <>
              Sorry, the correct answer is <strong>{props.correctAnswer}</strong>.
            </>
          )
        }
      </p>
    </div>
  );
}

export default Banner;
