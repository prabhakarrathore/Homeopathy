document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const paginationContainer = document.querySelector('.testimonial-pagination');

    if (!slider || !cards.length || !prevBtn || !nextBtn || !paginationContainer) {
        console.error("Slider elements not found!");
        return; // Exit if essential elements are missing
    }

    let currentIndex = 0;
    const totalSlides = cards.length;

    // --- Create Pagination Dots ---
    function createPaginationDots() {
        paginationContainer.innerHTML = ''; // Clear existing dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('pagination-dot');
            dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
            // Use Font Awesome heart icon
            dot.innerHTML = '<i class="fas fa-heart"></i>';
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            paginationContainer.appendChild(dot);
        }
    }

    // --- Update Slider Position and Active States ---
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) {
            console.warn(`Index ${index} out of bounds.`);
            return;
        }

        // Calculate the percentage offset based on card width (100%) and margin
        // This assumes margin-right is the primary gap
        const cardStyle = window.getComputedStyle(cards[0]);
        // Calculate total width percentage (card width + margin)
        // Since flex-basis is 100%, we just need the margin
        const marginRight = parseFloat(cardStyle.marginRight); // Get margin in pixels
        const containerWidth = slider.parentElement.offsetWidth; // Get container width in pixels
        const marginPercentage = (marginRight / containerWidth) * 100; // Convert margin to percentage of container
        const totalCardWidthPercentage = 100 + marginPercentage;

        // Apply the transform
        slider.style.transform = `translateX(-${index * totalCardWidthPercentage}%)`;
        currentIndex = index;
        updateActiveStates();
    }

    // --- Update Buttons and Dots ---
    function updateActiveStates() {
        // Update pagination dots
        const dots = paginationContainer.querySelectorAll('.pagination-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // --- Event Listeners ---
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
        else {
            goToSlide(totalSlides - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            goToSlide(currentIndex + 1);
        }
        else {
            goToSlide(0)
        }

    });

    // --- Initialization ---
    createPaginationDots();
    goToSlide(0); // Start at the first slide

    // --- Optional: Recalculate on Resize ---
    // If layout changes significantly, might need recalculation
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Re-apply current slide transform to adjust for potential
            // container width changes affecting margin percentage
            goToSlide(currentIndex);
        }, 1000); // Debounce resize events
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion .accordion-item');

    if (accordionItems.length > 0) {


        accordionItems.forEach(item => {
            const summary = item.querySelector('.accordion-header');

            summary.addEventListener('click', (e) => {

                e.preventDefault();

                const currentlyOpen = item.hasAttribute('open');

                // Close all other items *before* toggling the clicked one
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.hasAttribute('open')) {

                        otherItem.removeAttribute('open');
                    }
                });

                // Now, toggle the clicked item's state
                if (currentlyOpen) {
                    item.removeAttribute('open'); // Close it if it was open
                } else {
                    item.setAttribute('open', ''); // Open it if it was closed
                }
            });
        });
    }
});