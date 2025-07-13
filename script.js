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
    else if (hashInput(userInput) === "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2") { // Wer den Hash "systemtisch sucht" hat auch gewonnen :)
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
