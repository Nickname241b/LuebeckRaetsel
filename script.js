function confirmInput() {
    // Get the user input
    const userInput = document.getElementById("userInput").value.trim();
    const banner = document.getElementById("banner");
    const outputText = document.getElementById("outputText");

    if(userInput===""){
        banner.style.backgroundColor = "gray"
        banner.textContent = "Please submit at least something";
        banner.style.top = "0";
        outputText.textContent = "";
    }
    else if (hashInput(userInput) === "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08") { // Wer den Hash "systemtisch sucht" hat auch gewonnen :)
        banner.style.backgroundColor = "var(--success)"
        banner.textContent = "Congrats!";
        banner.style.top = "0";
        outputText.textContent = "";

    } else {
        banner.style.backgroundColor = "var(--fail)"
        banner.textContent = "Try again";
        banner.style.top = "0";
        outputText.textContent = "Prüfe deine Lösung";
    }


    setTimeout(() => {
        banner.style.top = "-50px";
    }, 3000);
}

async function hashInput(text) { // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
