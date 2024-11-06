// main.js

import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/navbar.css";
import "../styles/components/hero.css";
import "../styles/components/benefits.css";
import "../styles/components/portfolio.css";
import "../styles/components/comparison.css";
import "../styles/components/process.css";
import "../styles/components/faq.css";
import "../styles/components/cta.css";
import "../styles/components/footer.css";

import testimonialSwiper from './utils/testimonial-swiper.js';
import faqOpener from "./utils/faq-opener.js";
import { toggleDropdown } from "./utils/nav-opener.js";  // Import function

// Initialize functions
testimonialSwiper();
faqOpener();

// Event listener for the menu icon to toggle the dropdown
const menuIcon = document.querySelector('.nav__right > i');
if (menuIcon) {
    menuIcon.addEventListener('click', toggleDropdown);  // Attach function to event
}
