// Solucion 1
// const removeDuplicates = (arr) => {
// 	//Crear un array vacio
// 	const uniqueArr = [];
// 	// Iterar sobre el array original
// 	for (let i = 0; i < arr.length; i++) {
// 		// Checar si en uniqueArr incluye el elemento
// 		if (!uniqueArr.includes(arr[i])) {
// 			// Si no lo incluye, agregarlo en el uniqueArr
// 			uniqueArr.push(arr[i]);
// 		}
// 	}
// 	// Retornar el uniqueArr con elementos no duplicados
// 	return uniqueArr;
// };

const removeDuplicates = (arr) => [...new Set(arr)];

export default removeDuplicates;

const countingValleys = (steps, path) => {
	// Write your code here
	const separatedPath = [...path];
	let valleyCounter = 0; // To count the valleys
	let altitude = 0; // To increment altitude in every "U" char, otherwise decrement the altitude

	for (let i = 0; i < steps; i++) {
		//let char = str.charAt(i); // To get a char in every cycle

		if (separatedPath[i] === "U") {
			// check if the current char in the cycle is equal to "U"

			altitude++; // Increment the altitude if the char is "U"
			// This is the "key" when altitude is equal to 0 means that 1 valley was completed
			if (altitude === 0) {
				valleyCounter++; // Means that a valley was completed an increment
			}
		} else {
			// If is other char that not is "U"
			altitude--; // then the altitude will be decremented
		}
	}

	// Finally when for cycle ends, return the valleyCounter
	return valleyCounter;
};
