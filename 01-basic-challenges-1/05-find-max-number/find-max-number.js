// export const findMaxNumber = (arr) => arr.sort((a, b) => a - b).pop();
// export const findMaxNumber = (arr) => Math.max(...arr);
export const findMaxNumber = (arr) => {
	let max = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
};
