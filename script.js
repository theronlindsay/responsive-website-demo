// Select the hamburger button, the navigation menu, and the dark mode toggle button
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to check if user prefers dark mode (system preference or saved preference)
function getUserPreference() {
  // Check if user has a saved preference
  const savedPreference = localStorage.getItem('theme-preference');
  if (savedPreference) {
    return savedPreference;
  }
  
  // Otherwise, use system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Function to apply theme and update toggle button
function applyTheme(theme) {
  // Remove both classes first
  document.body.classList.remove('dark-mode', 'light-mode');
  
  // Apply the appropriate class (this overrides system preference)
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; // Sun icon to switch to light mode
  } else {
    document.body.classList.add('light-mode');
    darkModeToggle.textContent = '🌙'; // Moon icon to switch to dark mode
  }
  
  // Save user preference
  localStorage.setItem('theme-preference', theme);
}

// Initialize theme based on user preference
const initialTheme = getUserPreference();
applyTheme(initialTheme);

// Listen for system preference changes (when user doesn't have a saved preference)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only apply system preference if user hasn't manually chosen a theme
  if (!localStorage.getItem('theme-preference')) {
    const systemTheme = e.matches ? 'dark' : 'light';
    applyTheme(systemTheme);
  }
});

// Add a click event listener to toggle the menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active'); // Add or remove the 'active' class
});

// Add a click event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
  // Toggle between dark and light mode
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});
