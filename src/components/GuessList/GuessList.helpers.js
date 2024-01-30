export function padGuesses(arr, end) {
	const newArr = [];
	for (let i = 0; i < end; i += 1) {
		const value = i < arr.length ? arr[i] : null;
		newArr.push(value);
	}
	return newArr;
}
