window.addEventListener('load', function () {
    // Entrance barrier functionality
    const entranceBarrier = document.getElementById('entranceBarrier');

    entranceBarrier.addEventListener('click', function() {
        entranceBarrier.classList.add('hidden');
        // Remove the barrier from DOM after animation completes
        setTimeout(() => {
            entranceBarrier.remove();
        }, 500);
    });

    const container = document.getElementById('container');
    const svgWrapper = document.getElementById('svgWrapper');
    const svgObject = document.getElementById('svgObject');
    const infoButton = document.getElementById('circle2');
    const infoPopup = document.getElementById('info-popup');
    const contactButton = document.getElementById('circle');
    const contactPopup = document.getElementById('contact-popup');
    const imagesListButton = document.getElementById('circle4');
    const imagesListPopup = document.getElementById('images-list-popup');

    // Initialize SVG position to center
    let translateX = -(container.offsetWidth / 2);
    let translateY = -(container.offsetHeight / 2);
    let scale = 1;

    // Apply initial transform
    svgObject.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    function updateSvgTransform() {
        svgObject.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    // Handle image clicks
    document.querySelectorAll('.custom-image').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            const imageId = img.id.replace('bild', '');
            const popup = document.getElementById(`popup${imageId}`);

            // Toggle image enlargement
            const wasEnlarged = img.classList.contains('enlarged');

            // Close all popups first
            closeAllPopups();

            if (!wasEnlarged) {
                // Enlarge image
                img.classList.add('enlarged');

                // Wait for the image enlargement animation to complete
                setTimeout(() => {
                    // Show and position popup next to the enlarged image
                    const imgRect = img.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();

                    // Calculate position relative to the container
                    const relativeTop = imgRect.top - containerRect.top;
                    const relativeLeft = imgRect.left - containerRect.left;

                    // Calculate the width of the enlarged image (initial width * scale)
                    const initialWidth = 20; // This matches our CSS width
                    const scaleFactor = 10;  // This matches our CSS scale
                    const enlargedWidth = initialWidth * scaleFactor;

                    // Position popup right next to the enlarged image
                    popup.style.top = `${relativeTop}px`;
                    popup.style.left = `${relativeLeft + enlargedWidth + 20}px`; // 20px gap
                    popup.style.display = 'block';
                }, 800); // Wait for 800ms (matching the CSS transition duration)
            }
        });
    });

    // Handle source links
    document.querySelectorAll('.quellenLink, .imagesLink').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const imageId = this.getAttribute('data-id');
            const originalImage = document.getElementById(`bild${imageId}`);
            const mainPopup = document.getElementById(`popup${imageId}`);
            const sourcesPopup = document.getElementById(`popupQuellen${imageId}`);
            const imagesPopup = document.getElementById(`popupImages${imageId}`);
            const secondImagesPopup = document.getElementById(`popupImages${imageId}-2`);
            const korrekturPopup = document.getElementById(`popupKorrektur${imageId}`);

            // Determine which popup to show based on the clicked link's class
            let targetPopup = this.classList.contains('quellenLink') ? sourcesPopup : imagesPopup;

            // For images popup, position to the left of the original image
            if (this.classList.contains('imagesLink')) {
                const imgRect = originalImage.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const targetPopupWidth = 300; // Width of the image in popup-images
                const gap = 20; // Gap between popups

                // Calculate base position relative to the container and the original image
                const relativeTop = imgRect.top - containerRect.top;
                const relativeLeft = imgRect.left - containerRect.left;

                // Check if there's already an image popup for this location
                const isFirstImageVisible = imagesPopup.style.display === 'block';

                if (!isFirstImageVisible) {
                    // Show first image
                    imagesPopup.style.left = `${relativeLeft - targetPopupWidth - gap}px`;
                    imagesPopup.style.top = `${relativeTop}px`;
                    imagesPopup.style.display = 'block';
                    imagesPopup.style.zIndex = '30';

                    // Add click event listener to close when clicked
                    const img = imagesPopup.querySelector('img');
                    const newImg = img.cloneNode(true);
                    newImg.addEventListener('click', function(event) {
                        event.stopPropagation();
                        imagesPopup.style.display = 'none';
                    });
                    img.parentNode.replaceChild(newImg, img);

                } else {
                    const isSecondImageVisible = secondImagesPopup.style.display === 'block';
                    const thirdImagesPopup = document.getElementById(`popupImages${imageId}-3`);

                    if (!isSecondImageVisible) {
                        // Show second image
                        const offset = 20; // Offset for overlapping effect
                        secondImagesPopup.style.left = `${relativeLeft - targetPopupWidth - gap - offset}px`;
                        secondImagesPopup.style.top = `${relativeTop + offset}px`;
                        secondImagesPopup.style.display = 'block';
                        secondImagesPopup.style.zIndex = '31';

                        // Add click event listener to close when clicked
                        const img = secondImagesPopup.querySelector('img');
                        const newImg = img.cloneNode(true);
                        newImg.addEventListener('click', function(event) {
                            event.stopPropagation();
                            secondImagesPopup.style.display = 'none';
                        });
                        img.parentNode.replaceChild(newImg, img);
                    } else if (thirdImagesPopup) {
                        // Show third image
                        const offset = 40; // Larger offset for third image
                        thirdImagesPopup.style.left = `${relativeLeft - targetPopupWidth - gap - offset}px`;
                        thirdImagesPopup.style.top = `${relativeTop + offset}px`;
                        thirdImagesPopup.style.display = 'block';
                        thirdImagesPopup.style.zIndex = '32';

                        // Add click event listener to close when clicked
                        const img = thirdImagesPopup.querySelector('img');
                        const newImg = img.cloneNode(true);
                        newImg.addEventListener('click', function(event) {
                            event.stopPropagation();
                            thirdImagesPopup.style.display = 'none';
                        });
                        img.parentNode.replaceChild(newImg, img);
                    }
                }
            } else {
                // Original sources popup behavior
                let referencePopup = mainPopup;
                if (korrekturPopup.style.display === 'block') {
                    referencePopup = korrekturPopup;
                }

                const referenceRect = referencePopup.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                // Position directly under the reference popup
                const relativeLeft = referenceRect.left - containerRect.left;
                const relativeTop = referenceRect.top - containerRect.top + referenceRect.height + 10;

                targetPopup.style.left = `${relativeLeft}px`;
                targetPopup.style.top = `${relativeTop}px`;
                targetPopup.style.zIndex = '20'; // Ensure it appears above the main popup

                targetPopup.style.display = targetPopup.style.display === 'none' || !targetPopup.style.display ? 'block' : 'none';
            }
        });
    });

    // Handle Korrektur links
    document.querySelectorAll('.korrekturLink').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const imageId = this.closest('.popup').id.replace('popup', '');
            const mainPopup = document.getElementById(`popup${imageId}`);
            const sourcesPopup = document.getElementById(`popupQuellen${imageId}`);
            const korrekturPopup = document.getElementById(`popupKorrektur${imageId}`);

            // Toggle the Korrektur popup
            if (korrekturPopup.style.display === 'block') {
                korrekturPopup.style.display = 'none';
                return;
            }

            // Get the position of the main popup or sources popup
            let referencePopup = mainPopup;
            if (sourcesPopup.style.display === 'block') {
                referencePopup = sourcesPopup;
            }

            const referenceRect = referencePopup.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Position directly under the reference popup
            const relativeLeft = referenceRect.left - containerRect.left;
            const relativeTop = referenceRect.top - containerRect.top + referenceRect.height + 10;

            // Position Korrektur popup under the reference popup
            korrekturPopup.style.left = `${relativeLeft}px`;
            korrekturPopup.style.top = `${relativeTop}px`;
            korrekturPopup.style.zIndex = '20'; // Match the z-index of sources popup

            // Show the Korrektur popup
            korrekturPopup.style.display = 'block';
        });
    });

    // Handle Korrektur form submissions
    document.querySelectorAll('.korrektur-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const imageId = this.closest('.korrektur-popup').id.replace('popupKorrektur', '');
            const textarea = this.querySelector('textarea');
            const mailtoLink = `mailto:jakobsycha@gmail.com?subject=Korrektur für Standort ${imageId}&body=${encodeURIComponent(textarea.value)}`;
            window.location.href = mailtoLink;
            // Clear and hide the popup after sending
            textarea.value = '';
            this.closest('.korrektur-popup').style.display = 'none';
        });
    });

    // Add a St. Marx-only button and an additional text-and-images popup
    const stMarxMainPopup = document.getElementById('popup33');
    if (stMarxMainPopup) {
        const stMarxButton = document.createElement('button');
        stMarxButton.type = 'button';
        stMarxButton.textContent = 'More about St. Marx';
        stMarxButton.setAttribute('aria-expanded', 'false');
        stMarxButton.style.cssText = 'display:block;margin-top:8px;padding:6px 10px;background:#000;color:#fff;border:0;cursor:pointer;font:12px Arial,sans-serif;';
        stMarxMainPopup.appendChild(stMarxButton);

        const stMarxExtraPopup = document.createElement('div');
        stMarxExtraPopup.id = 'stMarxExtraPopup';
        stMarxExtraPopup.className = 'stmarx-extra-popup';
        stMarxExtraPopup.style.cssText = 'position:absolute;display:none;width:420px;max-width:80vw;max-height:70vh;overflow:auto;box-sizing:border-box;padding:14px;background:#fff;border:2px solid #333;font:13px/1.5 Arial,sans-serif;z-index:40;';

        const stMarxTitle = document.createElement('strong');
        stMarxTitle.textContent = 'St. Marx: culture and community space';
        stMarxTitle.style.cssText = 'display:block;margin-bottom:8px;font-size:16px;';
        stMarxExtraPopup.appendChild(stMarxTitle);

        const stMarxText = document.createElement('p');
        stMarxText.textContent = 'For around ten years, the approximately 45,000 m² open space at St. Marx hosted self-organized cultural projects. These included a community-built skatepark and gardens, alongside concerts, flea markets, cinema evenings, sports and other neighborhood activities.';
        stMarxExtraPopup.appendChild(stMarxText);

        const stMarxImages = document.createElement('div');
        stMarxImages.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;';
        ['Banner.Fotos/stmarx.jpg', 'Banner.Fotos/stmarx.2.jpg', 'Banner.Fotos/stmarx.4.jpg'].forEach((src, index) => {
            const image = document.createElement('img');
            image.src = src;
            image.alt = `St. Marx site photo ${index + 1}`;
            image.style.cssText = 'display:block;width:100%;height:auto;';
            stMarxImages.appendChild(image);
        });
        stMarxExtraPopup.appendChild(stMarxImages);

        const closeStMarxPopup = document.createElement('button');
        closeStMarxPopup.type = 'button';
        closeStMarxPopup.textContent = 'Close';
        closeStMarxPopup.style.cssText = 'display:block;margin-top:10px;padding:6px 10px;background:#000;color:#fff;border:0;cursor:pointer;';
        stMarxExtraPopup.appendChild(closeStMarxPopup);
        container.appendChild(stMarxExtraPopup);

        stMarxButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            const isOpen = stMarxExtraPopup.style.display === 'block';
            if (isOpen) {
                stMarxExtraPopup.style.display = 'none';
                stMarxButton.setAttribute('aria-expanded', 'false');
                return;
            }

            const popupRect = stMarxMainPopup.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            stMarxExtraPopup.style.left = `${popupRect.left - containerRect.left}px`;
            stMarxExtraPopup.style.top = `${popupRect.bottom - containerRect.top + 10}px`;
            stMarxExtraPopup.style.display = 'block';
            stMarxButton.setAttribute('aria-expanded', 'true');
        });

        closeStMarxPopup.addEventListener('click', function(event) {
            event.stopPropagation();
            stMarxExtraPopup.style.display = 'none';
            stMarxButton.setAttribute('aria-expanded', 'false');
        });
    }

    // Images List button click handler
    imagesListButton.addEventListener('click', function() {
        imagesListPopup.style.display = imagesListPopup.style.display === 'none' || !imagesListPopup.style.display ? 'block' : 'none';
    });

    // Handle clicks on location list items
    document.querySelectorAll('.clickable-location').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the click from closing the list popup
            const imageId = this.getAttribute('data-image-id');
            const targetImage = document.getElementById(`bild${imageId}`);
            const popup = document.getElementById(`popup${imageId}`);

            // Close any previously enlarged images and their popups
            document.querySelectorAll('.custom-image').forEach(img => {
                if (img !== targetImage) {
                    img.classList.remove('enlarged');
                }
            });
            document.querySelectorAll('.popup').forEach(p => {
                if (p !== popup) {
                    p.style.display = 'none';
                }
            });

            // Check if image is already enlarged
            const wasEnlarged = targetImage.classList.contains('enlarged');

            if (!wasEnlarged) {
                // Enlarge image
                targetImage.classList.add('enlarged');

                // Wait for the image enlargement animation to complete
                setTimeout(() => {
                    // Show and position popup next to the enlarged image
                    const imgRect = targetImage.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();

                    // Calculate position relative to the container
                    const relativeTop = imgRect.top - containerRect.top;
                    const relativeLeft = imgRect.left - containerRect.left;

                    // Calculate the width of the enlarged image
                    const initialWidth = 20; // Initial width from CSS
                    const scaleFactor = 10;  // Scale factor from CSS
                    const enlargedWidth = initialWidth * scaleFactor;

                    // Position popup right next to the enlarged image
                    popup.style.top = `${relativeTop}px`;
                    popup.style.left = `${relativeLeft + enlargedWidth + 20}px`; // 20px gap
                    popup.style.display = 'block';
                }, 800); // Wait for 800ms (matching the CSS transition duration)
            }
        });
    });

    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-image') &&
            !e.target.closest('.popup') &&
            !e.target.closest('.popup-detail') &&
            !e.target.closest('.popup-images') &&
            !e.target.closest('.korrektur-popup') &&
            !e.target.closest('.stmarx-extra-popup')) {
            closeAllPopups();
        }
        if (!e.target.closest('#circle2') && !e.target.closest('#info-popup')) {
            infoPopup.style.display = 'none';
        }
        if (!e.target.closest('#circle') && !e.target.closest('#contact-popup')) {
            contactPopup.style.display = 'none';
        }
        if (!e.target.closest('#circle4') && !e.target.closest('#images-list-popup')) {
            imagesListPopup.style.display = 'none';
        }
    });

    function closeAllPopups() {
        // Reset all images
        document.querySelectorAll('.custom-image').forEach(img => {
            img.classList.remove('enlarged');
        });

        // Hide all popups including second image popups
        document.querySelectorAll('.popup, .popup-detail, .popup-images, .korrektur-popup, .stmarx-extra-popup').forEach(popup => {
            popup.style.display = 'none';
        });
        const stMarxButton = document.querySelector('#popup33 button');
        if (stMarxButton) stMarxButton.setAttribute('aria-expanded', 'false');
    }

    document.getElementById('circle2').addEventListener('click', function(e) {
        e.stopPropagation();
        var infoPopup = document.getElementById('info-popup');
        var helpPopup = document.getElementById('help-popup');
        var contactPopup = document.getElementById('contact-popup');

        if (infoPopup.style.display === 'block') {
            infoPopup.style.display = 'none';
        } else {
            infoPopup.style.display = 'block';
            helpPopup.style.display = 'none';
            contactPopup.style.display = 'none';
        }
    });

    document.getElementById('circle3').addEventListener('click', function(e) {
        e.stopPropagation();
        var infoPopup = document.getElementById('info-popup');
        var helpPopup = document.getElementById('help-popup');
        var contactPopup = document.getElementById('contact-popup');

        if (helpPopup.style.display === 'block') {
            helpPopup.style.display = 'none';
        } else {
            helpPopup.style.display = 'block';
            infoPopup.style.display = 'none';
            contactPopup.style.display = 'none';
        }
    });

    document.getElementById('circle').addEventListener('click', function(e) {
        e.stopPropagation();
        var infoPopup = document.getElementById('info-popup');
        var helpPopup = document.getElementById('help-popup');
        var contactPopup = document.getElementById('contact-popup');

        if (contactPopup.style.display === 'block') {
            contactPopup.style.display = 'none';
        } else {
            contactPopup.style.display = 'block';
            infoPopup.style.display = 'none';
            helpPopup.style.display = 'none';
        }
    });

    // Add click event listeners to close popups when clicking outside
    window.addEventListener('click', function(event) {
        var infoPopup = document.getElementById('info-popup');
        var helpPopup = document.getElementById('help-popup');
        var contactPopup = document.getElementById('contact-popup');
        var circle2 = document.getElementById('circle2');
        var circle3 = document.getElementById('circle3');
        var circle = document.getElementById('circle');

        if (event.target !== infoPopup && event.target !== circle2 && !infoPopup.contains(event.target)) {
            infoPopup.style.display = 'none';
        }
        if (event.target !== helpPopup && event.target !== circle3 && !helpPopup.contains(event.target)) {
            helpPopup.style.display = 'none';
        }
        if (event.target !== contactPopup && event.target !== circle && !contactPopup.contains(event.target)) {
            contactPopup.style.display = 'none';
        }
    });

    // Header image scroll behavior
    const headerImage = document.getElementById('header-image');
    const bottomImage = document.getElementById('bottom-image');

    window.addEventListener('scroll', function() {
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        headerImage.style.transform = `translateX(${-scrollLeft* 0.3}px)`;
        bottomImage.style.transform = `translateX(${-scrollLeft * 0.3}px)`;
    });
});
