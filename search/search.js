class Search extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ` <div class="search-widget-container">
        <div class="search-widget" id="searchWidget">
            <!-- This button is visually represented by the widget's initial state -->
            <button class="search-toggle-btn" id="searchToggleBtn" aria-label="Open Search" aria-expanded="false">
               <i class="fas fa-search icon-search"></i>
            </button>

            <!-- Search Bar elements (initially hidden by widget size) -->
            <div class="search-bar-content">
                <i class="fas fa-search icon-search"></i>
                <input type="search" id="searchInput" placeholder="Search...">
                <button class="search-action-btn" id="searchActionBtn" aria-label="Add Item">
                    <i class="fas fa-times icon-close"></i>
                </button>
            </div>

            <!-- Search Results Dropdown -->
            <div class="search-results" id="searchResults">
                <ul>
                    <!-- Example Results (Dynamically added/shown via JS) -->
                    <li>
                        <span class="result-name">Johnathan Doe</span>
                        <span class="result-detail">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                    </li>
                    <li>
                        <span class="result-name">Johnny Williams</span>
                        <span class="result-detail">1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
                    </li>
                    <li>
                        <span class="result-name">John Smith</span>
                        <span class="result-detail">4140 Parker Rd. Allentown, New Mexico 31134</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
 ` ;
    }
}
customElements.define('search-widget', Search);

document.addEventListener('DOMContentLoaded', () => {
    const searchWidget = document.getElementById('searchWidget');
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const searchInput = document.getElementById('searchInput');
    const searchActionBtn = document.getElementById('searchActionBtn');
    const searchResults = document.getElementById('searchResults');
    const hide = document.querySelector("#hide")
    const hide1 = document.querySelector("#hide1")
    const hide2 = document.querySelector("#hide2")
    const sidelogo = document.querySelector("#logo")
    let isExpanded = false;

    // Function to expand the search bar
    const expandSearch = () => {
        if (!isExpanded) {
            searchWidget.classList.add('expanded');
            searchToggleBtn.setAttribute('aria-expanded', 'true');
            hide.style.display = "none"
            hide1.style.display = "none"
            hide2.style.display = "none"
            sidelogo.style.display = "none"
            setTimeout(() => { // Focus after animation starts
                searchInput.focus();
            }, getTransitionDuration(searchWidget)); // Focus after width transition ends
            isExpanded = true;
            // Check input value immediately in case it was pre-filled
            handleInputChange();
        }
    };

    // Function to collapse the search bar
    const collapseSearch = () => {
        if (isExpanded) {
            searchInput.value = ''; // Clear input on collapse
            searchWidget.classList.remove('has-input');
            searchWidget.classList.remove('show-results');
            searchWidget.classList.remove('expanded');
            hide.style.display = "flex"
            hide1.style.display = "flex"
            hide2.style.display = "flex"
            sidelogo.style.display = "flex"
            searchToggleBtn.setAttribute('aria-expanded', 'false');
            searchInput.blur(); // Remove focus
            isExpanded = false;
        }
    };

    // Handle input changes
    const handleInputChange = () => {
        const hasValue = searchInput.value.length > 0;
        searchWidget.classList.toggle('has-input', hasValue);
        // Basic logic: Show results if expanded and has input value
        searchWidget.classList.toggle('show-results', isExpanded && hasValue);

        // Here you would typically filter/fetch real results
        // For demo, we just toggle visibility based on input presence
    };

    // Event listener for the initial toggle button (widget background)
    searchToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering click outside listener
        expandSearch();
    });

    // Event listener for the action button (+ / X)
    searchActionBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (searchInput.value.length > 0) {
            // If input has value, clear it (acting as 'X')
            searchInput.value = '';
            handleInputChange(); // Update state (hides results, changes icon back)
            searchInput.focus(); // Keep focus
        } else if (isExpanded) {
            // If input is empty and bar is expanded, collapse it (acting as 'X' or '+')
            collapseSearch();
        } else {
            // If somehow clicked when collapsed (shouldn't happen easily), expand
            expandSearch();
        }
    });

    // Handle input event
    searchInput.addEventListener('input', handleInputChange);

    // Prevent widget collapse when clicking inside search bar or results
    searchWidget.addEventListener('click', (e) => {
        if (isExpanded) {
            e.stopPropagation(); // Prevent click from bubbling up to document
        }
    });

    // Collapse when clicking outside
    document.addEventListener('click', (e) => {
        if (isExpanded && !searchWidget.contains(e.target)) {
            collapseSearch();
        }
    });

    // Collapse on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isExpanded) {
            collapseSearch();
        }
    });

    // Helper to get transition duration (optional, for timing focus)
    function getTransitionDuration(element) {
        const duration = window.getComputedStyle(element).transitionDuration;
        // Convert "0.4s" to 400ms
        return parseFloat(duration) * (duration.includes('ms') ? 1 : 1000);
    }

});