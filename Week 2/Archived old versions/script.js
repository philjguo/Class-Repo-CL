const storyText = document.getElementById("story-text");
// const image1 = document.getElementById("image-1");
// const image2 = document.getElementById("image-2");
const BUTTON = document.getElementById("next");
const storySentences = [
    "Punctuality has never been my strong suit.",
    "As I sit here and watch the last ship leave for new Earth, I wish it was."
];

let currentSentenceIndex = 0;

// create a img tag 
let imageElt = document.createElement('img');
// change the img source
imageElt.src = "";
// get the empty div by its id
let imgContainer = document.getElementById('image-container');
imgContainer.append(imageElt);


function displayNextSentence() {
    currentSentenceIndex++;
   if (currentSentenceIndex < storySentences.length) {
       storyText.textContent = storySentences[currentSentenceIndex];
       imageElt.src = "image2.PNG"
   } else {
       imageElt.src = "image1.PNG"
   }
}

BUTTON.addEventListener("click", (displayNextSentence));





// function displayNextSentence() {
//     if (currentSentenceIndex < storySentences.length) {
//         storyText.textContent = storySentences[currentSentenceIndex];
//         currentSentenceIndex++;
//         // image1.style.opacity = 1;
//         // image2.style.opacity = 1;
//         // create a img tag 
//         let imageElt = document.createElement('img');
//         // change the img source
//         imageElt.src = "image2.PNG";
//         // get the empty div by its id
//         let imgContainer = document.getElementById('image-container');
//         imgContainer.append(imageElt);
//     } else {
//         // image2.style.opacity = 1;
//         console.log("Display image1")
//     }
// }

// BUTTON.addEventListener("click", displayNextSentence);

// Initial load
displayNextSentence();