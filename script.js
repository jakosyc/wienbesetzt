window.addEventListener('load', function () {
    // Entrance barrier functionality
    const entranceBarrier = document.getElementById('entranceBarrier');

    entranceBarrier.addEventListener('click', function() {
        entranceBarrier.classList.add('hidden');
        setTimeout(() => entranceBarrier.remove(), 500);
    });

    const container = document.getElementById('container');
    const svgObject = document.getElementById('svgObject');
    const infoPopup = document.getElementById('info-popup');
    const contactPopup = document.getElementById('contact-popup');
    const imagesListButton = document.getElementById('circle4');
    const imagesListPopup = document.getElementById('images-list-popup');

    let translateX = -(container.offsetWidth / 2);
    let translateY = -(container.offsetHeight / 2);
    let scale = 1;
    svgObject.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    function updateSvgTransform() {
        svgObject.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    // St. Marx-only additional popup, with styling in a stylesheet-style block.
    const stMarxMainPopup = document.getElementById('popup33');
    if (stMarxMainPopup) {
        const stMarxStyles = document.createElement('style');
        stMarxStyles.textContent = `
            #popup33 .stmarx-more-button{display:block;margin-top:8px;padding:8px 12px;color:#fff;background:#245b8f;border:1px solid #163b5c;border-radius:6px;font:bold 13px Arial,sans-serif;cursor:pointer;transition:background-color .2s ease,transform .2s ease}
            #popup33 .stmarx-more-button:hover{background:#347bb5;transform:scale(1.03)}
            #popup33 .stmarx-extra-popup{position:absolute;left:0;top:calc(100% + 10px);display:none;box-sizing:border-box;width:420px;max-width:80vw;max-height:70vh;overflow:auto;padding:16px;color:#222;background:#fff;border:2px solid #333;border-radius:8px;font:14px/1.5 Arial,sans-serif;z-index:40}
            #popup33 .stmarx-extra-popup strong{display:block;margin:0 0 8px;font:bold 18px Arial,sans-serif;letter-spacing:normal}
            #popup33 .stmarx-extra-popup p{margin:0 0 12px;font:14px/1.5 Arial,sans-serif}
            #popup33 .stmarx-extra-images{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
            #popup33 .stmarx-extra-images img{display:block;width:100%;height:auto;object-fit:cover}
            #popup33 .stmarx-extra-popup .stmarx-close-button{display:block;margin-top:10px;padding:7px 12px;color:#fff;background:#222;border:0;border-radius:4px;cursor:pointer;font:13px Arial,sans-serif}
            #popup33 .stmarx-extra-popup .stmarx-close-button:hover{background:#444}
        `;
        document.head.appendChild(stMarxStyles);

        const stMarxButton = document.createElement('button');
        stMarxButton.type = 'button';
        stMarxButton.className = 'stmarx-more-button';
        stMarxButton.textContent = 'More about St. Marx';
        stMarxButton.setAttribute('aria-expanded', 'false');
        stMarxMainPopup.appendChild(stMarxButton);

        const stMarxExtraPopup = document.createElement('div');
        stMarxExtraPopup.id = 'stMarxExtraPopup';
        stMarxExtraPopup.className = 'stmarx-extra-popup';
        const stMarxTitle = document.createElement('strong');
        stMarxTitle.textContent = 'St. Marx: culture and community space';
        stMarxExtraPopup.appendChild(stMarxTitle);

        const stMarxText = document.createElement('p');
        stMarxText.textContent = 'For around ten years, the approximately 45,000 m² open space at St. Marx hosted self-organized cultural projects. These included a community-built skatepark and gardens, alongside concerts, flea markets, cinema evenings, sports and other neighborhood activities.';
        stMarxExtraPopup.appendChild(stMarxText);

        const stMarxImages = document.createElement('div');
        stMarxImages.className = 'stmarx-extra-images';
        ['Banner.Fotos/stmarx.jpg', 'Banner.Fotos/stmarx.2.jpg', 'Banner.Fotos/stmarx.4.jpg'].forEach((src, index) => {
            const image = document.createElement('img');
            image.src = src;
            image.alt = `St. Marx site photo ${index + 1}`;
            stMarxImages.appendChild(image);
        });
        stMarxExtraPopup.appendChild(stMarxImages);

        const stMarxCloseButton = document.createElement('button');
        stMarxCloseButton.type = 'button';
        stMarxCloseButton.className = 'stmarx-close-button';
        stMarxCloseButton.textContent = 'Close';
        stMarxExtraPopup.appendChild(stMarxCloseButton);
        stMarxMainPopup.appendChild(stMarxExtraPopup);

        stMarxButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            const open = stMarxExtraPopup.style.display === 'block';
            stMarxExtraPopup.style.display = open ? 'none' : 'block';
            stMarxButton.setAttribute('aria-expanded', String(!open));
        });
        stMarxCloseButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            stMarxExtraPopup.style.display = 'none';
            stMarxButton.setAttribute('aria-expanded', 'false');
        });
    }

    // Handle image clicks
    document.querySelectorAll('.custom-image').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            const imageId = img.id.replace('bild', '');
            const popup = document.getElementById(`popup${imageId}`);
            const wasEnlarged = img.classList.contains('enlarged');
            closeAllPopups();
            if (!wasEnlarged) {
                img.classList.add('enlarged');
                setTimeout(() => {
                    const imgRect = img.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const relativeTop = imgRect.top - containerRect.top;
                    const relativeLeft = imgRect.left - containerRect.left;
                    const enlargedWidth = 20 * 10;
                    popup.style.top = `${relativeTop}px`;
                    popup.style.left = `${relativeLeft + enlargedWidth + 20}px`;
                    popup.style.display = 'block';
                }, 800);
            }
        });
    });

    // Handle source and image links
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
            const targetPopup = this.classList.contains('quellenLink') ? sourcesPopup : imagesPopup;

            if (this.classList.contains('imagesLink')) {
                const imgRect = originalImage.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const targetPopupWidth = 300;
                const gap = 20;
                const relativeTop = imgRect.top - containerRect.top;
                const relativeLeft = imgRect.left - containerRect.left;
                const isFirstImageVisible = imagesPopup.style.display === 'block';
                if (!isFirstImageVisible) {
                    imagesPopup.style.left = `${relativeLeft - targetPopupWidth - gap}px`;
                    imagesPopup.style.top = `${relativeTop}px`;
                    imagesPopup.style.display = 'block';
                    imagesPopup.style.zIndex = '30';
                    const img = imagesPopup.querySelector('img');
                    const newImg = img.cloneNode(true);
                    newImg.addEventListener('click', event => { event.stopPropagation(); imagesPopup.style.display = 'none'; });
                    img.parentNode.replaceChild(newImg, img);
                } else {
                    const isSecondImageVisible = secondImagesPopup.style.display === 'block';
                    const thirdImagesPopup = document.getElementById(`popupImages${imageId}-3`);
                    if (!isSecondImageVisible && secondImagesPopup) {
                        const offset = 20;
                        secondImagesPopup.style.left = `${relativeLeft - targetPopupWidth - gap - offset}px`;
                        secondImagesPopup.style.top = `${relativeTop + offset}px`;
                        secondImagesPopup.style.display = 'block';
                        secondImagesPopup.style.zIndex = '31';
                        const img = secondImagesPopup.querySelector('img');
                        if (img) {
                            const newImg = img.cloneNode(true);
                            newImg.addEventListener('click', event => { event.stopPropagation(); secondImagesPopup.style.display = 'none'; });
                            img.parentNode.replaceChild(newImg, img);
                        }
                    } else if (thirdImagesPopup) {
                        const offset = 40;
                        thirdImagesPopup.style.left = `${relativeLeft - targetPopupWidth - gap - offset}px`;
                        thirdImagesPopup.style.top = `${relativeTop + offset}px`;
                        thirdImagesPopup.style.display = 'block';
                        thirdImagesPopup.style.zIndex = '32';
                        const img = thirdImagesPopup.querySelector('img');
                        if (img) {
                            const newImg = img.cloneNode(true);
                            newImg.addEventListener('click', event => { event.stopPropagation(); thirdImagesPopup.style.display = 'none'; });
                            img.parentNode.replaceChild(newImg, img);
                        }
                    }
                }
            } else {
                let referencePopup = mainPopup;
                if (korrekturPopup && korrekturPopup.style.display === 'block') referencePopup = korrekturPopup;
                const referenceRect = referencePopup.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                targetPopup.style.left = `${referenceRect.left - containerRect.left}px`;
                targetPopup.style.top = `${referenceRect.top - containerRect.top + referenceRect.height + 10}px`;
                targetPopup.style.zIndex = '20';
                targetPopup.style.display = targetPopup.style.display === 'none' || !targetPopup.style.display ? 'block' : 'none';
            }
        });
    });

    // Handle correction links
    document.querySelectorAll('.korrekturLink').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const imageId = this.closest('.popup').id.replace('popup', '');
            const mainPopup = document.getElementById(`popup${imageId}`);
            const sourcesPopup = document.getElementById(`popupQuellen${imageId}`);
            const korrekturPopup = document.getElementById(`popupKorrektur${imageId}`);
            if (korrekturPopup.style.display === 'block') { korrekturPopup.style.display = 'none'; return; }
            const referencePopup = sourcesPopup && sourcesPopup.style.display === 'block' ? sourcesPopup : mainPopup;
            const referenceRect = referencePopup.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            korrekturPopup.style.left = `${referenceRect.left - containerRect.left}px`;
            korrekturPopup.style.top = `${referenceRect.top - containerRect.top + referenceRect.height + 10}px`;
            korrekturPopup.style.zIndex = '20';
            korrekturPopup.style.display = 'block';
        });
    });

    // Handle correction form submissions
    document.querySelectorAll('.korrektur-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const imageId = this.closest('.korrektur-popup').id.replace('popupKorrektur', '');
            const textarea = this.querySelector('textarea');
            window.location.href = `mailto:jakobsycha@gmail.com?subject=Korrektur für Standort ${imageId}&body=${encodeURIComponent(textarea.value)}`;
            textarea.value = '';
            this.closest('.korrektur-popup').style.display = 'none';
        });
    });

    // Images List button click handler
    imagesListButton.addEventListener('click', function() {
        imagesListPopup.style.display = imagesListPopup.style.display === 'none' || !imagesListPopup.style.display ? 'block' : 'none';
    });

    // Handle clicks on location list items
    document.querySelectorAll('.clickable-location').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const imageId = this.getAttribute('data-image-id');
            const targetImage = document.getElementById(`bild${imageId}`);
            const popup = document.getElementById(`popup${imageId}`);
            document.querySelectorAll('.custom-image').forEach(img => { if (img !== targetImage) img.classList.remove('enlarged'); });
            document.querySelectorAll('.popup').forEach(p => { if (p !== popup) p.style.display = 'none'; });
            const wasEnlarged = targetImage.classList.contains('enlarged');
            if (!wasEnlarged) {
                targetImage.classList.add('enlarged');
                setTimeout(() => {
                    const imgRect = targetImage.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const relativeTop = imgRect.top - containerRect.top;
                    const relativeLeft = imgRect.left - containerRect.left;
                    popup.style.top = `${relativeTop}px`;
                    popup.style.left = `${relativeLeft + 20 * 10 + 20}px`;
                    popup.style.display = 'block';
                }, 800);
            }
        });
    });

    // Close map popups when clicking outside them
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-image') && !e.target.closest('.popup') && !e.target.closest('.popup-detail') && !e.target.closest('.popup-images') && !e.target.closest('.korrektur-popup')) closeAllPopups();
        if (!e.target.closest('#circle2') && !e.target.closest('#info-popup')) infoPopup.style.display = 'none';
        if (!e.target.closest('#circle') && !e.target.closest('#contact-popup')) contactPopup.style.display = 'none';
        if (!e.target.closest('#circle4') && !e.target.closest('#images-list-popup')) imagesListPopup.style.display = 'none';
    });

    function closeAllPopups() {
        document.querySelectorAll('.custom-image').forEach(img => img.classList.remove('enlarged'));
        document.querySelectorAll('.popup, .popup-detail, .popup-images, .korrektur-popup').forEach(popup => popup.style.display = 'none');
        const extraPopup = document.getElementById('stMarxExtraPopup');
        if (extraPopup) extraPopup.style.display = 'none';
        const moreButton = document.querySelector('#popup33 .stmarx-more-button');
        if (moreButton) moreButton.setAttribute('aria-expanded', 'false');
    }

    document.getElementById('circle2').addEventListener('click', function(e) {
        e.stopPropagation();
        const helpPopup = document.getElementById('help-popup');
        const contactPopup = document.getElementById('contact-popup');
        if (infoPopup.style.display === 'block') infoPopup.style.display = 'none';
        else { infoPopup.style.display = 'block'; helpPopup.style.display = 'none'; contactPopup.style.display = 'none'; }
    });

    document.getElementById('circle3').addEventListener('click', function(e) {
        e.stopPropagation();
        const helpPopup = document.getElementById('help-popup');
        if (helpPopup.style.display === 'block') helpPopup.style.display = 'none';
        else { helpPopup.style.display = 'block'; infoPopup.style.display = 'none'; contactPopup.style.display = 'none'; }
    });

    document.getElementById('circle').addEventListener('click', function(e) {
        e.stopPropagation();
        const helpPopup = document.getElementById('help-popup');
        if (contactPopup.style.display === 'block') contactPopup.style.display = 'none';
        else { contactPopup.style.display = 'block'; infoPopup.style.display = 'none'; helpPopup.style.display = 'none'; }
    });

    // Header image scroll behavior
    const headerImage = document.getElementById('header-image');
    const bottomImage = document.getElementById('bottom-image');
    window.addEventListener('scroll', function() {
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        if (headerImage) headerImage.style.transform = `translateX(${-scrollLeft * 0.3}px)`;
        if (bottomImage) bottomImage.style.transform = `translateX(${-scrollLeft * 0.3}px)`;
    });
});
