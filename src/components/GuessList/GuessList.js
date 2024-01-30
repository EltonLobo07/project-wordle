import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { padGuesses } from './GuessList.helpers';

function GuessList({ guesses, answer }) {
	return (
		<div 
			className = "guess-results"
		>
			{padGuesses(guesses, NUM_OF_GUESSES_ALLOWED).map((guess, guessIdx) => (
				<Guess 
					key = {guessIdx}
					answer = {answer}
				>
					{guess}
				</Guess>
			))}
		</div>
	);
}

export default GuessList;
