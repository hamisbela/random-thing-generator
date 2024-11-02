document.getElementById('generate').addEventListener('click', generateImages);

function generateImages() {
    const container = document.getElementById('image-container');
    container.innerHTML = ''; // Clear previous images

    for (let i = 0; i < 5; i++) { // Generate 5 random images
        const img = document.createElement('img');
        img.src = `https://picsum.photos/200/300?random=${Math.random()}`; // Random image URL
        img.alt = 'Random Image';
        container.appendChild(img);
    }
}
