const arrayIntersection = (arr1, arr2) => {
	// Create a set from arr1
	const arrSetted = new Set(arr1);
	// Declare an empty array to store the intersection
	const arrIntersection = [];

	// Loop through arr2
	for (let i = 0; i < arr2.length; i++) {
		// const containedNum = arr2[i];
		// If the current number is in set1, add it to the intersection array
		if (arrSetted.has(arr2[i])) arrIntersection.push(arr2[i]);
	}
	return arrIntersection;
};

// const arrayIntersection = (arr1, arr2) => {
// 	// Declare an empty array to store the intersection
// 	const intersection = [];

// 	// Loop through arr1
// 	for (let i = 0; i < arr1.length; i++) {
// 		// If the current element is in arr2 and not already in the intersection array, add it
// 		if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
// 			intersection.push(arr1[i]);
// 		}
// 	}

// 	return intersection;
// };

export default arrayIntersection;
