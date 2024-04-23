// Example JavaScript for handling form submissions and user interactions
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent! We will get back to you shortly.');
        });
    }

    // Handle sign-up form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for signing up! Your account has been created.');
        });
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Login successful! Welcome!');
        });
    }

    // Function to handle "Learn More" button click
    window.learnMore = function() {
        alert('More information about the Lamborghini Urus Mansory Venetus.');
    }
});

