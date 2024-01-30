import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import GuessList from '../GuessList';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	const addNewGuess = value => {
		setGuesses([...guesses, value]);
	};

	const playerWon = 
		guesses
			.map(guess => checkGuess(guess, answer).every(({ status }) => status === "correct"))
			.some(value => value);
	const reachedGuessLimit = guesses.length === NUM_OF_GUESSES_ALLOWED;
	const gameOver = playerWon || reachedGuessLimit;

	return (
		<>
			Put a game here!
			<GuessList 
				guesses = {guesses}
				answer = {answer}
			/>
			<Input 
				addNewGuess = {addNewGuess}
				disabled = {gameOver}
			/>
			{
				gameOver && (
					<Banner 
						{...(
							playerWon
							? {type: "happy", numGuesses: guesses.length}
							: {type: "sad", correctAnswer: answer}
						)}
					/>
				)
			}
		</>
	);
}

export default Game;
