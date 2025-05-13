
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.navbar-links');
        const mobileSearchIcon = document.querySelector('.mobile-search-icon');
        const searchInputContainer = document.querySelector('.search-input-container-mobile');
        const cancelIcon = document.querySelector('.search-input-container-mobile .cancel-icon');

        // Toggle hamburger menu
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            searchInputContainer.classList.remove('active'); // Hide search when menu opens
        });

        // Show mobile search input
        mobileSearchIcon.addEventListener('click', () => {
            searchInputContainer.classList.add('active');
            navLinks.classList.remove('active'); // Hide menu when search opens
        });

        // Hide mobile search input
        cancelIcon.addEventListener('click', () => {
            searchInputContainer.classList.remove('active');
        });

        // Hide menu and search on window resize if wider than mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                searchInputContainer.classList.remove('active');
            }
        });
