import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	const addNewGuess = value => {
		setGuesses([...guesses, {id: crypto.randomUUID(), value}]);
	};

	return (
		<>
			Put a game here!
			<GuessList 
				guesses = {guesses}
			/>
			<Input 
				addNewGuess = {addNewGuess}
			/>
		</>
	);
}

export default Game;
