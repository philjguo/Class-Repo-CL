
let characterArray = [
    {
        name: "Alex",
        imageSrc: "alex1.png",
        description: "By day, I uphold the law; by night, I chase the ball. Both roles keep me on my toes. - Alex, 31, Policeman / Soccer Player.",
    
    },
    {
        name: "Dan",
        imageSrc: "dan1.png",
        description: "I whip up delicious dishes in the kitchen and tear up the road on my bike. Two passions, one thrilling life. - Dan, 32, Chef / Motorcycle Player",

    },
    {
        name: "lin",
        imageSrc: "lin1.png",
        description: "I battle blazes and make people laugh. Life's too short not to embrace both extremes. - Lin, 26, Firefighter / Talkshow Comedian",
    },
    {
        name: "maria",
        imageSrc: "maria1.png",
        description: "From the skies to the mat, I guide journeys of comfort and serenity. Finding balance at 10,000 meter and on solid ground. - Maria, 29, Flight Attendant / Yoga Teacher",
    }
]


let currentImage = "alex1.png";

const imageMap = {
    "alex1.png": "alex2.png",
    "sophia1.png": "sophia2.png"
};

function updateImage() {
    const imgElement = document.getElementById('image');
    imgElement.src = currentImage;
}

document.getElementById('previous').addEventListener('click', function () {
    if (currentImage === "sophia1.png") {
        currentImage = "alex1.png";
        updateImage();
    }
});

document.getElementById('next').addEventListener('click', function () {
    if (currentImage === "alex1.png") {
        currentImage = "sophia1.png";
        updateImage();
    } else {
        currentImage = "alex1.png";
        updateImage();
    }
});

const imgElement = document.getElementById('image');
imgElement.addEventListener('mouseenter', function () {
    const nextImage = imageMap[currentImage];
    if (nextImage) {
        currentImage = nextImage;
        updateImage();
    }
});

imgElement.addEventListener('mouseleave', function () {
    currentImage = imageMap[currentImage] ? imageMap[currentImage] : "alex1.png";
    updateImage();
});






