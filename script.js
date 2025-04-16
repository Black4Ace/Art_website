
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
    const domBasedPages = ["digital-page", "marker-page", "ink-page", "pencil-page"];

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


   
   
   
//    // Image groups for modal navigation
//     const imageGroups = {
//         group1: [
//             '/Paintings/Abstract.jpg',
//             '/Paintings/Abstract cropped mockup.png',
//             '/Paintings/Abstract mockup.png'
//         ],
//         group2: [
//             '/Paintings/black and white water.jpg',
//             '/Paintings/black and white water cropped mockup.png',
//             '/Paintings/black and white water mock up.png'
//         ],
//         group3: [
//             '/Paintings/blue boys.jpg',
//             '/Paintings/blue boys cropped mockup.png',
//             '/Paintings/blue boys mockup.png'
//         ],
//         group4: [
//             '/Paintings/roses.jpg',
//             '/Paintings/roses cropped mockup.png',
//             '/Paintings/Roses mockup.png'
//         ],
//         group5: [
//             '/Paintings/shtetle.jpg',
//             '/Paintings/Shtetle cropped mockup.png',
//             '/Paintings/Shtetle mockup.png'
//         ],
//         group6: [
//             '/Paintings/textured forest.jpg',
//             '/Paintings/textured forest cropped mockup.png',
//             '/Paintings/textured forest mockup.png'
//         ],
//         group7: [
//             '/Paintings/waterfall.jpg',
//             '/Paintings/waterfall cropped mockup.png',
//             '/Paintings/waterfall mockup.png'
//         ],
//         group8: [
//             '/Paintings/Akeida 1.jpg',
//             '/Paintings/Akeida 2.jpg',
//             '/Paintings/Akeida cropped Mockup.png',
//             '/Paintings/Akeida Mockup.png'
//         ],
//         group9: [
//             '/Digital/Ballgown.png',
//             '/Digital/Face_Paint.png',
//             '/Digital/Fox.png',
//             '/Digital/Jade.png',
//             '/Digital/Light.png',
//             '/Digital/Raven.png',
//             '/Digital/Rose.png',
//             '/Digital/Sunburst.png',
//             '/Digital/Yerushalayim.png',
//         ]

//     };

//     let currentImageIndex = 0;
//     let currentGroup = [];

//     // Modal elements
//     const modal = document.getElementById('imageModal');
//     const modalImage = document.getElementById('modalImage');
//     const closeBtn = document.querySelector('.close');
//     const prevBtn = document.getElementById('prev');
//     const nextBtn = document.getElementById('next');

//     // Function to open the modal and display the selected image
//     function openModal(clickedImageSrc, groupID) {
//         currentGroup = imageGroups[groupID] || [];
//         currentImageIndex = currentGroup.indexOf(clickedImageSrc);
//         modalImage.src = clickedImageSrc;
//         modal.style.display = 'block';
//     }

//     // Navigate to the next image
//     function nextImage() {
//         currentImageIndex = (currentImageIndex + 1) % currentGroup.length;
//         modalImage.src = currentGroup[currentImageIndex];
//     }

//     // Navigate to the previous image
//     function prevImage() {
//         currentImageIndex = (currentImageIndex - 1 + currentGroup.length) % currentGroup.length;
//         modalImage.src = currentGroup[currentImageIndex];
//     }

//     // Close modal
//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     nextBtn.addEventListener('click', nextImage);
//     prevBtn.addEventListener('click', prevImage);

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });

//     // Initialize modal functionality based on page ID
//     const bodyID = document.body.id;

//     if (bodyID === "gallery-page" || bodyID === "digital-page" || bodyID === "marker-page" || bodyID === "ink-page" || bodyID === "pencil-page") {
//         const selector = bodyID === "gallery-page" ? '.gallery-container' : '.artwork-container';
//         const containers = document.querySelectorAll(selector);

//         containers.forEach(container => {
//             container.addEventListener('click', (event) => {
//                 const clickedImage = container.querySelector('img');
//                 if (clickedImage) {
//                     const groupID = clickedImage.getAttribute('data-modal-group');
//                     openModal(clickedImage.src, groupID);
//                 }
//             });
//         });
//     }




// // Image Groups for Modal Navigation (used on gallery.html)
// const imageGroups = {

//     group1: [
//         '/Paintings/Abstract.jpg', 
//         '/Paintings/Abstract cropped mockup.png', 
//         '/Paintings/Abstract mockup.png'
//     ],
//     group2: [
//         '/Paintings/black and white water.jpg', 
//         '/Paintings/black and white water cropped mockup.png', 
//         '/Paintings/black and white water mock up.png'
//     ],
//     group3: [
//         '/Paintings/blue boys.jpg', 
//         '/Paintings/blue boys cropped mockup.png', 
//         '/Paintings/blue boys mockup.png'
//     ],
//     group4: [
//         '/Paintings/roses.jpg', 
//         '/Paintings/roses cropped mockup.png', 
//         '/Paintings/Roses mockup.png'
//     ],
//     group5: [
//         '/Paintings/shtetle.jpg', 
//         '/Paintings/Shtetle cropped mockup.png', 
//         '/Paintings/Shtetle mockup.png'
//     ],
//     group6: [
//         '/Paintings/textured forest.jpg', 
//         '/Paintings/textured forest cropped mockup.png', 
//         '/Paintings/textured forest mockup.png'
//     ],
//     group7: [
//         '/Paintings/waterfall.jpg', 
//         '/Paintings/waterfall cropped mockup.png', 
//         '/Paintings/waterfall mockup.png'
//     ],
//     group8: [
//         '/Paintings/Akeida 1.jpg', 
//         '/Paintings/Akeida 2.jpg', 
//         '/Paintings/Akeida cropped Mockup.png', 
//         '/Paintings/Akeida Mockup.png'
//     ]
// };

// // Function to handle modal operations
// function handleModal(pageID) {
//     let currentImageIndex = 0;
//     let currentGroup = []; // Store images for navigation

//     // Modal elements
//     const modal = document.getElementById('imageModal');
//     const modalImage = document.getElementById('modalImage');
//     const closeBtn = document.querySelector('.close');
//     const prevBtn = document.getElementById('prev');
//     const nextBtn = document.getElementById('next');

//     // Fetch image groups based on the page ID (gallery or digital)
//     let imageElements = [];
//     if (pageID === "gallery-page") {
//         imageElements = document.querySelectorAll('.gallery-container img');
//     } else if (pageID === "digital-page") {
//         imageElements = document.querySelectorAll('.gallery-image');
//     }

//     // Function to open the modal and display the selected image
//     function openModal(clickedImageSrc, group) {
//         currentGroup = imageGroups[group];
//         currentImageIndex = currentGroup.indexOf(clickedImageSrc);
//         modalImage.src = clickedImageSrc;
//         modal.style.display = 'block';
//     }

//     // Navigate to the next image
//     function nextImage() {
//         currentImageIndex = (currentImageIndex + 1) % currentGroup.length;
//         modalImage.src = currentGroup[currentImageIndex];
//     }

//     // Navigate to the previous image
//     function prevImage() {
//         currentImageIndex = (currentImageIndex - 1 + currentGroup.length) % currentGroup.length;
//         modalImage.src = currentGroup[currentImageIndex];
//     }

//     // Add event listeners to each gallery container
//     const containers = document.querySelectorAll('.gallery-container, .artwork-container');
//     containers.forEach(container => {
//         container.addEventListener('click', (event) => {
//             const clickedImage = container.querySelector('img');
//             if (clickedImage) {
//                 const groupID = clickedImage.getAttribute('data-modal-group'); // Get the data-modal-group attribute
//                 openModal(clickedImage.src, groupID);
//             }
//         });
//     });

//     // Close the modal when the close button is clicked
//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     // Navigation buttons (prev and next)
//     nextBtn.addEventListener('click', nextImage);
//     prevBtn.addEventListener('click', prevImage);

//     // Close the modal if the user clicks outside the modal content
//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// }

// // Initialize the modal based on the page ID (gallery or digital)
// if (document.body.id === "gallery-page") {
//     handleModal("gallery-page");
// } else if (document.body.id === "digital-page") {
//     handleModal("digital-page");
// }





// This function handles modal operations for both pages (gallery and digital)

// Initialize variables for modal operation
// let currentImageIndex = 0;
// let imageGroups = []; // Store images for navigation

// // Modal elements
// const modal = document.getElementById('imageModal');
// const modalImage = document.getElementById('modalImage');
// const closeBtn = document.querySelector('.close');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// // Function to open the modal and display the selected image
// function openModal(clickedImageSrc) {
//     currentImageIndex = imageGroups.indexOf(clickedImageSrc);
//     modalImage.src = clickedImageSrc;
//     modal.style.display = 'block';
// }

// // Navigate to the next image
// function nextImage() {
//     currentImageIndex = (currentImageIndex + 1) % imageGroups.length;
//     modalImage.src = imageGroups[currentImageIndex];
// }

// // Navigate to the previous image
// function prevImage() {
//     currentImageIndex = (currentImageIndex - 1 + imageGroups.length) % imageGroups.length;
//     modalImage.src = imageGroups[currentImageIndex];
// }

// // Close the modal
// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// // Navigation buttons (prev and next)
// nextBtn.addEventListener('click', nextImage);
// prevBtn.addEventListener('click', prevImage);

// // Close the modal if the user clicks outside the modal content
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// // Run the function based on the page ID (gallery or digital)
// if (document.body.id === "gallery-page") {
//     // Gallery page specific actions
//     let imageElements = document.querySelectorAll('.gallery-container img');
//     imageGroups = Array.from(imageElements).map(img => img.src);

//     const galleryContainers = document.querySelectorAll('.gallery-container');
//     galleryContainers.forEach(container => {
//         container.addEventListener('click', (event) => {
//             const clickedImage = container.querySelector('img');
//             if (clickedImage) {
//                 openModal(clickedImage.src);
//             }
//         });
//     });
// }

// if (document.body.id === "digital-page") {
//     // Digital page specific actions
//     let imageElements = document.querySelectorAll('.artwork-container img');
//     imageGroups = Array.from(imageElements).map(img => img.src);

//     const galleryContainers = document.querySelectorAll('.artwork-container');
//     galleryContainers.forEach(container => {
//         container.addEventListener('click', (event) => {
//             const clickedImage = container.querySelector('img');
//             if (clickedImage) {
//                 openModal(clickedImage.src);
//             }
//         });
//     });
// }








// Image Groups for Modal Navigation (used on gallery.html)
// const groupedImages = [
//     ['Abstract.jpg', 'Abstract cropped mockup.png', '/Painting/Abstract mockup.png'],
//     ['/Painting/black and white water.jpg', '/Painting/black and white water cropped mockup.png', '/Painting/black and white water mock up.png'],
//     ['/Painting/blue boys.jpg', '/Painting/blue boys cropped mockup.png', '/Painting/blue boys mockup.png'],
//     ['/Painting/roses.jpg', '/Painting/roses cropped mockup.png', '/Painting/Roses mockup.png'],
//     ['/Painting/shtetle.jpg', '/Painting/Shtetle cropped mockup.png', '/Painting/Shtetle mockup.png'],
//     ['/Painting/textured forest.jpg', '/Painting/textured forest cropped mockup.png', '/Painting/textured forest mockup.png'],
//     ['/Painting/waterfall.jpg', '/Painting/waterfall cropped mockup.png', '/Painting/waterfall mockup.png'],
//     ['/Painting/Akeida 1.jpg', '/Painting/Akeida 2.jpg', '/Painting/Akeida cropped Mockup.png', '/Painting/Akeida Mockup.png']
// ];

// let currentGroupIndex = 0;
// let currentImageIndex = 0;
// let imageGroupsForPage = []; // For non-gallery pages
// let isGalleryPage = false;

// // Modal Elements
// const modal = document.getElementById('imageModal');
// const modalImage = document.getElementById('modalImage');
// const closeBtn = document.querySelector('.close');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// window.addEventListener('DOMContentLoaded', () => {
//     const path = window.location.pathname;
//     isGalleryPage = path.includes('gallery.html');

//     if (!isGalleryPage) {
//         // Flat image array for non-gallery pages
//         imageGroupsForPage = Array.from(document.querySelectorAll('.artwork-container img')).map(img => img.src);
//     }

//     // Add click listeners to all images inside containers
//     const containers = document.querySelectorAll('.artwork-container, .gallery-container');
//     containers.forEach(container => {
//         const images = container.querySelectorAll('img');
//         images.forEach(img => {
//             img.addEventListener('click', () => openModal(img.src));
//         });
//     });

//     // Optional scroll highlight from query string
//     // const params = new URLSearchParams(window.location.search);
//     // const imageName = params.get('image');
//     // if (imageName) {
//     //     const targetImg = document.querySelector(`img[src*="${decodeURIComponent(imageName)}"]`);
//     //     if (targetImg) {
//     //         targetImg.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     //         targetImg.style.outline = '3px solid red';
//     //         setTimeout(() => {
//     //             targetImg.style.outline = '';
//     //         }, 2000);
//     //     }
//     // }
// });

// // Open modal function
// function openModal(clickedImageSrc) {
//     // const filename = clickedImageSrc.split('/').pop();

//     if (isGalleryPage) {
//         // Find group that contains this image
//         for (let i = 0; i < groupedImages.length; i++) {
//             const group = groupedImages[i];
//             const normalize = str => str.toLowerCase().replace(/\s+/g, '');
//             const indexInGroup = group.findIndex(img => normalize(img) === normalize(filename));

//             if (indexInGroup !== -1) {
//                 currentGroupIndex = i;
//                 currentImageIndex = indexInGroup;
//                 modalImage.src = group[currentImageIndex];
//                 modal.style.display = 'block';
//                 return;
//             }
//         }
//         console.warn('Image not found in any group:', filename);
//     } else {
//         currentImageIndex = imageGroupsForPage.findIndex(src => src === clickedImageSrc);
//         modalImage.src = clickedImageSrc;
//         modal.style.display = 'block';
//     }
// }

// // Close modal
// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// // Navigate to next image
// nextBtn.addEventListener('click', () => {
//     if (isGalleryPage) {
//         const group = groupedImages[currentGroupIndex];
//         currentImageIndex = (currentImageIndex + 1) % group.length;
//         modalImage.src = group[currentImageIndex];
//     } else {
//         currentImageIndex = (currentImageIndex + 1) % imageGroupsForPage.length;
//         modalImage.src = imageGroupsForPage[currentImageIndex];
//     }
// });

// // Navigate to previous image
// prevBtn.addEventListener('click', () => {
//     if (isGalleryPage) {
//         const group = groupedImages[currentGroupIndex];
//         currentImageIndex = (currentImageIndex - 1 + group.length) % group.length;
//         modalImage.src = group[currentImageIndex];
//     } else {
//         currentImageIndex = (currentImageIndex - 1 + imageGroupsForPage.length) % imageGroupsForPage.length;
//         modalImage.src = imageGroupsForPage[currentImageIndex];
//     }
// });

// // Close modal when clicking outside it
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// // Highlight SVG icons on more-link
// document.querySelectorAll('.more-link a').forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         const svgIcons = document.querySelectorAll('#footer svg');
//         svgIcons.forEach(svg => svg.classList.add('highlight-svg'));
//         setTimeout(() => {
//             svgIcons.forEach(svg => svg.classList.remove('highlight-svg'));
//         }, 5000);
//     });
// });


// let currentGroupIndex = 0;
// let currentImageIndex = 0;
// let imageGroupsForPage = []; // For non-gallery pages
// let isGalleryPage = false;

// // Modal Elements
// const modal = document.getElementById('imageModal');
// const modalImage = document.getElementById('modalImage');
// const closeBtn = document.querySelector('.close');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// window.addEventListener('DOMContentLoaded', () => {
//     // const path = window.location.pathname;
//     // isGalleryPage = path.includes('gallery.html');

//     // if (!isGalleryPage) {
//         // Flat image array for non-gallery pages
//         imageGroupsForPage = Array.from(document.querySelectorAll('.artwork-container img')).map(img => img.src);
//     // }

//     // Add click listeners to all images inside containers
//     const containers = document.querySelectorAll('.artwork-container, .gallery-container');
//     containers.forEach(container => {
//         const images = container.querySelectorAll('img');
//         images.forEach(img => {
//             img.addEventListener('click', () => openModal(img.src));
//         });
//     });
// });

// // Open modal function
// function openModal(clickedImageSrc) {
//     // const filename = clickedImageSrc.split('/').pop();

//     // if (isGalleryPage) {
//     //     // Find group that contains this image
//     //     for (let i = 0; i < groupedImages.length; i++) {
//     //         const group = groupedImages[i];
//     //         const normalize = str => str.toLowerCase().replace(/\s+/g, '');
//     //         const indexInGroup = group.findIndex(img => normalize(img) === normalize(filename));

//     //         if (indexInGroup !== -1) {
//     //             currentGroupIndex = i;
//     //             currentImageIndex = indexInGroup;
//     //             modalImage.src = group[currentImageIndex];
//     //             modal.style.display = 'block';
//     //             return;
//     //         }
//     //     }
//     //     console.warn('Image not found in any group:', filename);
//     // } else {
//         currentImageIndex = imageGroupsForPage.findIndex(src => src === clickedImageSrc);
//         modalImage.src = clickedImageSrc;
//         modal.style.display = 'block';
//     // }
// }

// // Close modal
// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// // Navigate to next image
// nextBtn.addEventListener('click', () => {
//     // if (isGalleryPage) {
//     //     const group = groupedImages[currentGroupIndex];
//     //     currentImageIndex = (currentImageIndex + 1) % group.length;
//     //     modalImage.src = group[currentImageIndex];
//     // } else 
//     {
//         currentImageIndex = (currentImageIndex + 1) % imageGroupsForPage.length;
//         modalImage.src = imageGroupsForPage[currentImageIndex];
//     }
// });

// // Navigate to previous image
// prevBtn.addEventListener('click', () => {
//     // if (isGalleryPage) {
//     //     const group = groupedImages[currentGroupIndex];
//     //     currentImageIndex = (currentImageIndex - 1 + group.length) % group.length;
//     //     modalImage.src = group[currentImageIndex];
//     // } else 
//     {
//         currentImageIndex = (currentImageIndex - 1 + imageGroupsForPage.length) % imageGroupsForPage.length;
//         modalImage.src = imageGroupsForPage[currentImageIndex];
//     }
// });

// // Close modal when clicking outside it
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// let currentImageIndex = 0;
// let imageGroupsForPage = []; // For all pages (including the gallery)

// // Modal Elements
// const modal = document.getElementById('imageModal');
// const modalImage = document.getElementById('modalImage');
// const closeBtn = document.querySelector('.close');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// window.addEventListener('DOMContentLoaded', () => {
//     // Populate imageGroupsForPage for all images in artwork containers
//     imageGroupsForPage = Array.from(document.querySelectorAll('.artwork-container img')).map(img => img.src);
//     console.log('Images on this page:', imageGroupsForPage);  // Debugging log to see the array

//     // Add click listeners to all images inside containers
//     const containers = document.querySelectorAll('.artwork-container, .gallery-container');
//     containers.forEach(container => {
//         const images = container.querySelectorAll('img');
//         images.forEach(img => {
//             img.addEventListener('click', () => openModal(img.src));
//         });
//     });
// });

// // Open modal function
// function openModal(clickedImageSrc) {
//     console.log('Clicked image:', clickedImageSrc);  // Debugging log
//     currentImageIndex = imageGroupsForPage.findIndex(src => src === clickedImageSrc);
//     console.log('Current image index:', currentImageIndex);  // Debugging log
//     modalImage.src = clickedImageSrc;
//     modal.style.display = 'block';
// }

// // Close modal
// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// // Navigate to next image
// nextBtn.addEventListener('click', () => {
//     currentImageIndex = (currentImageIndex + 1) % imageGroupsForPage.length;
//     modalImage.src = imageGroupsForPage[currentImageIndex];
// });

// // Navigate to previous image
// prevBtn.addEventListener('click', () => {
//     currentImageIndex = (currentImageIndex - 1 + imageGroupsForPage.length) % imageGroupsForPage.length;
//     modalImage.src = imageGroupsForPage[currentImageIndex];
// });

// // Close modal when clicking outside it
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });


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

// // Initialize modal and navigation variables
// let currentImageIndex = 0;
// let imageGroups = []; // Store images to navigate

// // Modal elements
// const modal = document.getElementById('imageModal');
// const modalImage = document.getElementById('modalImage');
// const closeBtn = document.querySelector('.close');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// // Fetch all images in the gallery container
// const imageElements = document.querySelectorAll('.gallery-image');
// imageGroups = Array.from(imageElements).map(img => img.src);

// // Function to open the modal and display the selected image
// function openModal(clickedImageSrc) {
//     currentImageIndex = imageGroups.indexOf(clickedImageSrc);
//     modalImage.src = clickedImageSrc;
//     modal.style.display = 'block';
// }

// // Function to navigate to the next image
// function nextImage() {
//     currentImageIndex = (currentImageIndex + 1) % imageGroups.length;
//     modalImage.src = imageGroups[currentImageIndex];
// }

// // Function to navigate to the previous image
// function prevImage() {
//     currentImageIndex = (currentImageIndex - 1 + imageGroups.length) % imageGroups.length;
//     modalImage.src = imageGroups[currentImageIndex];
// }

// // Add event listeners to each gallery container
// const galleryContainers = document.querySelectorAll('.gallery-container');

// galleryContainers.forEach(container => {
//     container.addEventListener('click', (event) => {
//         // If the click is on the image or the description, open the modal
//         const clickedImage = container.querySelector('.gallery-image');
//         if (clickedImage) {
//             openModal(clickedImage.src);
//         }
//     });
// });

// // Add event listener to close button
// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// // Add event listeners for next/previous buttons
// nextBtn.addEventListener('click', nextImage);
// prevBtn.addEventListener('click', prevImage);

// // Close the modal if the user clicks anywhere outside the modal content
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });
