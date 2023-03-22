// Replace the videoIds array with the video IDs of the YouTube videos you want to showcase
const videoIds = ['NJvc3ywlfaM', 'lhN3zga0bl8', '3T-F8i-0S14'];

// Add custom text to the corresponding video IDs
const videoTexts = [
    'Legend of Catto',
    'Surviving Uni',
    'Digger',
];

videoIds.forEach((videoId, index) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    // Create a paragraph element to display the custom text
    const customText = document.createElement('p');
    customText.textContent = videoTexts[index];
    customText.style.marginTop = '0.5rem';

    gridItem.appendChild(iframe);
    gridItem.appendChild(customText); // Add the custom text below the video
    document.querySelector('.grid-container').appendChild(gridItem);
});
