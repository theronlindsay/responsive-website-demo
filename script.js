// Select the hamburger button and the navigation menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Add a click event listener to toggle the menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active'); // Add or remove the 'active' class
});
