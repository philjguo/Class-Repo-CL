const storyText = document.getElementById("story-text");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");

const storySentences = [
    "Punctuality has never been my strong suit.",
    "As I sit here and watch the last ship leave for new Earth, I wish it was."
];

let currentSentenceIndex = 0;

function displayNextSentence() {
    if (currentSentenceIndex < storySentences.length) {
        storyText.textContent = storySentences[currentSentenceIndex];
        currentSentenceIndex++;
        image1.style.opacity = 0;
        image2.style.opacity = 1;
    } else {
        image2.style.opacity = 0;
    }
}

image1.addEventListener("click", displayNextSentence);

// Initial load
displayNextSentence();