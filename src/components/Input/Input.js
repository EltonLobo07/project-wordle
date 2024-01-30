import React from 'react';

function Input({ addNewGuess, disabled }) {
	const id = React.useId();
	const [guess, setGuess] = React.useState("");

	const inputId = `guess-input-${id}`;

	const handleSubmit = event => {
		event.preventDefault();
		addNewGuess(guess);
		setGuess("");
	};

	return (
		<form
			onSubmit = {handleSubmit} 
			className = "guess-input-wrapper"
		>
			<label 
				htmlFor = {inputId}
			>
				Enter guess:
			</label>
			<input 
				required
				disabled = {disabled}
				id = {inputId} 
				type = "text" 
				value = {guess}
				onChange = {e => setGuess(e.target.value.toUpperCase())}
				minLength = {5}
				maxLength = {5}
				title = "Guess that should contain exactly 5 characters"
				pattern = "[A-Za-z]{5}"
			/>
		</form>
	);
}

export default Input;
