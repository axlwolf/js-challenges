const findMissingNumber = (arr) => {
	// If the array is empty or undefined, return undefined

	if (!arr || arr.length === 0) {
		return undefined;
	}
	// Add 1 to the length of the array to account for the missing number

	const n = arr.length + 1;
	// Calculate the expected sum of the numbers from 1 to n

	const expectedSum = (n * (n + 1)) / 2;
	// let actualSum = 0;
	// // Calculate the actual sum of the numbers in the array

	// for (let i = 0; i < arr.length; i++) {
	// 	actualSum += arr[i];
	// }
	const actualSum = arr.reduce((sum, num) => sum + num, 0);

	console.log({
		expectedSum,
		actualSum,
		missingNumber: expectedSum - actualSum,
	});
	// Return the difference between the expected sum and the actual sum
	return expectedSum - actualSum;
};

export default findMissingNumber;
