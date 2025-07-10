console.log("INIT");

async function hashInput(text) {
	const encoder = new TextEncoder();
	const data = encoder.encode(text);
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
	return hashHex;
}

async function confirmInput() {
	const input = document.getElementById("userInput");
	const value = input.value;
	const output = document.getElementById("outputText");

	output.textContent = value || "Nothing was entered.";

	if (value) {
		const hashed = await hashInput(value);
		console.log("SHA-256 Hash:", hashed);
	}

	input.value = "";
	input.focus();
}
