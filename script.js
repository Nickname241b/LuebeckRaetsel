async function confirmInput() {
    // Get the user input
    const userInput = document.getElementById("userInput").value.trim();
    const banner = document.getElementById("banner");
    const outputText = document.getElementById("outputText");

    const value = await hashInput(userInput);

    if(userInput===""){
        banner.style.backgroundColor = "gray"
        banner.textContent = "Input darf nicht leer sein";
        banner.style.top = "0";
        outputText.textContent = "";
    }
    else if (value === "4323ff7415e7ffb95f348731fbda5bb263c68fef5df52cec83625a988917efde") { //alternative Lösung: hash cracken
        banner.style.backgroundColor = "var(--success)"
        banner.textContent = "Glückwunsch!";
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
