class SHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
       <div class="ribbon">086 2600893 | grainne@homeopathyforhealth.ie</div>
    <header>
        <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle Menu" aria-expanded="false"
            aria-controls="sidebar">
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="sidebar" id="sidebar">
            <div class="sidebar-inner">
                <div class="sidebar-header">
                    <div class="sidebar-logo">
                        <a href="/" class="logo">
                            <img src="../logo.png" alt="Logo" class="logo-img">
                        </a>
                    </div>
                    <button class="close" id="close"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>


                <ul class="nav-group main-nav">
                    <li><a href="/" class="active"><i class="fa-solid fa-store"></i> <span
                                class="nav-text">Home</span></a></li>
                    <li><a href="../about/about.html"><i class="fa-solid fa-info"></i> <span class="nav-text"> About
                                Us</span></a></li>
                    <li><a href="../homeopathy-for-men/homeopathy-for-men.html"><i class="fa-solid fa-person"></i> <span class="nav-text">Homeopathy For
                                Men</span></a></li>
                    <li><a href="../homeopathy-for-women/homeopathy-for-women.html"><i class="fa-solid fa-person-dress"></i> <span class="nav-text"> Homeopathy For
                                Women</span></a></li>
                    <li><a href="../homeopathy-for-children/homeopathy-for-children.html"><i class="fa-solid fa-children"></i><span class="nav-text">Homeopathy For
                                Children</span></a></li>
                    <li><a href="../clinic/clinic.html"><i class="fa-solid fa-house-chimney-medical"></i><span class="nav-text"> Acutes
                                Clinic</span></a></li>
                    <li><a href="../blog/blog.html"><i class="fa-solid fa-blog"></i><span class="nav-text">Blog</span></a></li>
                </ul>
            </div>
        </nav>
        <div class="sidebar-logo">
            <a href="/" class="logo1">
                <img src="../logo.png" alt="Logo" id="logo" class="logo-img">
            </a>
        </div>

        <div class="sidebar-backdrop" id="sidebar-backdrop">
        <a href="../contact/contact.html" id="hide" ><i class="fa-solid fa-store"></i></a>
        <a href="/" id="hide1" ><i class="fa-solid fa-bag-shopping"></i></a>
        <a href="../contact/contact.html" id="hide2" ><i class="fa-regular fa-user"></i></a>
        <search-widget></search-widget>
        </div>
    </header>
    
    <div class="overlay" id="overlay"></div>
    
      `;
    }
}

customElements.define('s-header', SHeader);

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');
    const body = document.body;
    // Function to toggle the sidebar
    const toggleSidebar = () => {
        const isSidebarOpen = sidebar.classList.contains('open');
        sidebar.classList.toggle('open');
        hamburgerBtn.classList.toggle('active');
        overlay.classList.toggle('active');

        // Update ARIA attributes
        hamburgerBtn.setAttribute('aria-expanded', !isSidebarOpen);


        body.style.overflow = isSidebarOpen ? 'auto' : 'hidden';
    };

    // Event listener for the hamburger button
    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from immediately closing via document listener
            toggleSidebar();
        });
    }

    // Event listener for the overlay (close sidebar on click)
    if (overlay) {
        overlay.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                toggleSidebar();
            }
        });
    }

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from immediately closing via document listener
        toggleSidebar();
    });
    // Optional: Close sidebar if clicking outside of it
    document.addEventListener('click', (e) => {
        // Check if the sidebar is open and the click was outside the sidebar and not on the hamburger button
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            toggleSidebar();
        }
    });

    // Optional: Close sidebar on 'Escape' key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    });
});


