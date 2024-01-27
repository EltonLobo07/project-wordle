import React from 'react';

function GuessList({ guesses }) {
	if (guesses.length === 0) {
		return null;
	}

	return (
		<div 
			className = "guess-results"
		>
			{guesses.map(guess => (
				<p 
					key = {guess.id}
					className = "guess"
				>
					{guess.value}
				</p>
			))}
		</div>
	);
}

export default GuessList;
