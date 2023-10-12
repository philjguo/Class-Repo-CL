let currentSentenceIndex = 0;
const storySentences = [
    "Punctuality has never been my strong suit.",
    "As I sit here and watch the last ship leave for new Earth, I wish it was."
];

function changeImageAndText() {
    const storyText = document.getElementById("story-text");
    const image = document.getElementById("image");

    if (currentSentenceIndex === 0) {
        currentSentenceIndex = 1;
        storyText.textContent = storySentences[currentSentenceIndex];
        image.src = "image2.PNG";
        image.alt = "Image 2.a";
    }
}

// Initial load
document.getElementById("image").addEventListener("click", changeImageAndText);