const textInput = document.getElementById('textInput');
const wordCountElement = document.getElementById('wordCount');
const sentenceCountElement = document.getElementById('sentenceCount');

textInput.addEventListener('input', updateCounts);

function updateCounts() {
    const text = textInput.value.trim();
    
    // Count words
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Count sentences
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    // Update the display
    wordCountElement.innerHTML = `<span class="counter-icon">📝</span><span>Words: ${wordCount}</span>`;
    sentenceCountElement.innerHTML = `<span class="counter-icon">📄</span><span>Sentences: ${sentenceCount}</span>`;
}