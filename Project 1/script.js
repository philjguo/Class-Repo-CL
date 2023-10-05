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
