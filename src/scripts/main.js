// This file contains the JavaScript code for the portfolio. 
// It may include functionality for interactivity, such as handling form submissions or animations.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            alert('Thank you for your submission!');
            form.reset();
        });
    }

    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});