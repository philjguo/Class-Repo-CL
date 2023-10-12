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
        name: "Sophia",
        imageSrc1: "sophia1.png",
        imageSrc2: "sophia2.png",
        description: "In the hospital, I mend bodies. On the cliffs, I test my own limits. Healing and climbing, it's all about reaching new heights. -- Sophia, 33, Doctor / Rock Climber"
    },
    {
        name: "Dan",
        imageSrc1: "dan1.png",
        imageSrc2: "dan2.png",
        description: "I whip up delicious dishes in the kitchen and tear up the road on my bike. Two passions, one thrilling life. -- Dan, 32, Chef / Motorcycle Player"
    },
    {
        name: "Lin",
        imageSrc1: "lin1.png",
        imageSrc2: "lin2.png",
        description: "I battle blazes and make people laugh. Life's too short not to embrace both extremes. -- Lin, 26, Firefighter / Talkshow Comedian"
    },
    {
        name: "Maria",
        imageSrc1: "maria1.png",
        imageSrc2: "maria2.png",
        description: "From the skies to the mat, I guide journeys of comfort and serenity. Finding balance at 10,000 meter and on solid ground. -- Maria, 29, Flight Attendant / Yoga Teacher"
    },
   
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