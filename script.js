// Google Analytics tracking setup
(function() {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-QY2QSX162L';
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-MVXJ44FZJV');
})();

const imageGroups = {
    group1: [
        'Paintings/Abstract.webp',
        'Paintings/Abstract cropped mockup.webp',
        'Paintings/Abstract mockup.webp'
    ],
    group2: [
        'Paintings/black and white water.webp',
        'Paintings/black and white water cropped mockup.webp',
        'Paintings/black and white water mock up.webp'
    ],
    group3: [
        'Paintings/blue boys.webp',
        'Paintings/blue boys cropped mockup.webp',
        'Paintings/blue boys mockup.webp'
    ],
    group4: [
        'Paintings/roses.webp',
        'Paintings/roses cropped mockup.webp',
        'Paintings/Roses mockup.webp'
    ],
    group5: [
        'Paintings/shtetle.webp',
        'Paintings/Shtetle cropped mockup.webp',
        'Paintings/Shtetle mockup.webp'
    ],
    group6: [
        'Paintings/textured forest.webp',
        'Paintings/textured forest cropped mockup.webp',
        'Paintings/textured forest mockup.webp'
    ],
    group7: [
        'Paintings/waterfall.webp',
        'Paintings/waterfall cropped mockup.webp',
        'Paintings/waterfall mockup.webp'
    ],
    group8: [
        'Paintings/Akeida 1.webp',
        'Paintings/Akeida 2.webp',
        'Paintings/Akeida cropped Mockup.webp',
        'Paintings/Akeida Mockup.webp'
    ],
    group9: [
        'Digital/Ballgown.webp',
        'Digital/Face_Paint.webp',
        'Digital/Fox.webp',
        'Digital/Jade.webp',
        'Digital/Light.webp',
        'Digital/Raven.webp',
        'Digital/Rose.webp',
        'Digital/Sunburst.webp',
        'Digital/Yerushalayim.webp',
    ]
};


    let currentImageIndex = 0;
    let currentGroup = [];

    // Modal elements
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    // Open modal and display image
    function openModal(clickedImageSrc, groupID) {
        currentGroup = imageGroups[groupID] || [];
        currentImageIndex = currentGroup.indexOf(clickedImageSrc);
        modalImage.src = clickedImageSrc;
        modal.style.display = 'block';
    }

    // Navigate next
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentGroup.length;
        modalImage.src = currentGroup[currentImageIndex];
    }

    // Navigate previous
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentGroup.length) % currentGroup.length;
        modalImage.src = currentGroup[currentImageIndex];
    }

    // Event listeners
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Detect page type and apply modal behavior
    const bodyID = document.body.id;
    const domBasedPages = ["digital-page", "marker-page", "ink-page", "pencil-page", "watercolour-page"];

    if (bodyID === "gallery-page" || domBasedPages.includes(bodyID)) {
        const selector = bodyID === "gallery-page" ? '.gallery-container' : '.artwork-container';
        const containers = document.querySelectorAll(selector);

        if (bodyID === "gallery-page") {
            // Use predefined groups for gallery page
            containers.forEach(container => {
                container.addEventListener('click', (event) => {
                    const clickedImage = container.querySelector('img');
                    if (clickedImage) {
                        const groupID = clickedImage.getAttribute('data-modal-group');
                        openModal(clickedImage.src, groupID);
                    }
                });
            });
        } else {
            // Use DOM order for digital/marker/ink/pencil pages
            const images = document.querySelectorAll(`${selector} img`);
            currentGroup = Array.from(images).map(img => img.src);

            containers.forEach(container => {
                container.addEventListener('click', (event) => {
                    const clickedImage = container.querySelector('img');
                    if (clickedImage) {
                        const clickedSrc = clickedImage.src;
                        currentImageIndex = currentGroup.indexOf(clickedSrc);
                        modalImage.src = clickedSrc;
                        modal.style.display = 'block';
                    }
                });
            });
        }
    }

// Highlight SVG icons on more-link
document.querySelectorAll('.more-link a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const svgIcons = document.querySelectorAll('#footer svg');
        svgIcons.forEach(svg => svg.classList.add('highlight-svg'));
        setTimeout(() => {
            svgIcons.forEach(svg => svg.classList.remove('highlight-svg'));
        }, 5000);
    });
});


