

const element = document.getElementById("myBtn");
element.addEventListener("click", redact);
function redact(event) {
    event.preventDefault()
    const inputText = document.getElementById('inputText').value;
    const wordsToRedact = document.getElementById('wordsToRedact').value.toLowerCase().split(/\s+/);

    const regex = new RegExp(wordsToRedact.join("|"), "gi");

    const redactedText = inputText.replace(regex, match => "*".repeat(match.length));

    document.getElementById('output').innerText = redactedText;

    const stats = calculateStats(inputText, wordsToRedact, redactedText);
    document.getElementById('stats').innerText = stats;
}

function calculateStats(inputText, wordsToRedact, redactedText) {
    const wordsScanned = inputText.split(/\s+/).length;
    const matchedWords = inputText.match(new RegExp(wordsToRedact.join("|"), "gi"))?.length || 0;
    const charactersScrambled = inputText.length - redactedText.length;
    return `Words scanned: ${wordsScanned}\nMatched words: ${matchedWords}\nCharacters scrambled: ${charactersScrambled}\n`;
}
