// Replace the videoIds array with the video IDs of the YouTube videos you want to showcase
const videoIds = ["IZw4etldMc0","KoOBMtoYJyw","5-d67N9Xq4E","Sb5ZC60FJw4","E_eCu3ZRcNE","0hjIX7x5NmA","pQm9J3wCkQ4","nUAZfpGhCas","zKmdHssf3UU","nxjmmOt9ya0","lBp9LV0rcgI","xwLLfTP9wso","U6RHvT3iJ8A","S1ubv5jChWY","Mf2EsMO5J4c","o5Ce5wz1RWM","8-G96ZOr37s","hcNissUb_2s","f63PXRO6Qv0","abHReNJsFtA","vVfPQo6Gad4","qsoS_mkzdjU","nKumIvpzJ-k","ufvuoMQpkkM","c7mEnPxw5bU","kFHFWiHqevM","MjJAbaAvnQw","dFeykdgRkBI","_6ndWEgMks8","hSm-wGffpp4","gBH_VjSkmc4"];

// Add custom text to the corresponding video IDs
const videoTexts = [
    "María del Mar Jaramillo (Class 2021)","Alia Elkattan (Class 2020)","Wendi Li (Class 2019)","Paula Dozsa (Class of 2018)","Martin Smit (Class of 2020)","Megan Moore (Class of 2018)","Sara Aldhaheri (Class of 2019)","Tomasz Bachosz (Class of 2019)","Ushna Usman (Class of 2019)","Aayusha Shrestha (Class of 2022)","Kefa Kabanga (Class of 2015)","Khairunnisa Semesta (Class of 2018)","Pedro Zufiria (Class of 2017)","Said Siderite Abdallah (Class of 2017)","Margarita Bicec (Class of 2019)","Sjur Hamre (Class of 2018)","Ella Noll (Class of 2019)","Esmie Papadimitriou (Class of 2019)","Jahnae Miller (Class of 2020)","Ruth Gebremedhin (Class of 2020)","Kertu Kõss (Class of 2021)","Tami Gjorgjieva (Class of 2018)","Peter (Seongun) Si (Class of 2018)","Vlad Cherevkov (Class of 2020)","Layan Abu Yassin (Class of 2018)","Arantza Rodriguez Melchor (Class of 2019)","Dana Abu Ali  (Class of 2018)","Imtiyaz Enayatali Hariyani (Class of 2019)","Mariana Arrieta Yánez (Class of 2020)","Batu Aytemiz (Class of 2017)","Muhammad Shujaat Mirza (Class of 2018)"
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
