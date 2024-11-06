// utils/nav-opener.js

// Function to toggle the visibility of the dropdown menu
export function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}
