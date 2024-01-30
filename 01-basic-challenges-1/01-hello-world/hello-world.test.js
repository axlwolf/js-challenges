import { helloWorld } from "./hello-world.js";

test("Returning 'Hello, World!' as a string", () => {
	const result = helloWorld();
	expect(result).toBe("Hello World!");
});
