export const calculator = (a, b, op) => {
	let operations = {
		"+": a + b,
		"-": a - b,
		"*": a * b,
		"/": a / b,
		default: "Invalid operator",
	};
	return operations[op] || operations["default"];
};
