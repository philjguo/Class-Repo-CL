document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const backgroundImage = document.getElementById('backgroundImage');

    button.addEventListener('click', function () {
        // Toggle the 'hidden' class to hide/show the image
        backgroundImage.classList.toggle('hidden');
    });
});
