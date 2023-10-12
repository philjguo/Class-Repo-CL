const imgElement = document.getElementById('imageContainer');
const paraElement = document.getElementById('paraContainer');

let characterArray = [
    {
        name: "Alex",
        imageSrc1: "alex1.png",
        imageSrc2: "alex2.png",
        description: "By day, I uphold the law; by night, I chase the ball. Both roles keep me on my toes. -- Alex, 29, Policeman / Soccer Player."
    },
    {
        name: "Dan",
        imageSrc1: "dan1.png",
        imageSrc2: "dan2.png",
        description: "I whip up delicious dishes in the kitchen and tear up the road on my bike. Two passions, one thrilling life. -- Dan, 32, Chef / Motorcycle Player"
    },
    // ... (add the rest of the character objects)
];

let counter = 0;

document.getElementById('next').addEventListener('click', () => {
    if (counter < characterArray.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    updateCharacter();
});

document.getElementById('previous').addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = characterArray.length - 1;
    }
    updateCharacter();
});

function updateCharacter() {
    imgElement.src = characterArray[counter].imageSrc1;
    paraElement.innerText = characterArray[counter].description;
}

imgElement.addEventListener('mouseenter', function () {
    imgElement.src = characterArray[counter].imageSrc2;
});

imgElement.addEventListener('mouseleave', function () {
    imgElement.src = characterArray[counter].imageSrc1;
});

// Initialize with the first character
updateCharacter();