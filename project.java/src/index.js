// This is a JavaScript code to handle the navigation bar.

// Get the navigation bar elements.
const navigationBar = document.querySelector('.navigation-bar');
const logo = document.querySelector('.logo');
const navigationLinks = document.querySelector('.navigation-links');

// Add event listeners to the navigation links.
navigationLinks.addEventListener('click', (event) => {
  // Get the clicked link element.
  const clickedLink = event.target;

  // Check if the clicked element is a link.
  if (clickedLink.tagName === 'A') {
    // Get the href attribute of the clicked link.
    const href = clickedLink.href;

    // Redirect to the link.
    window.location.href = href;
  }
});

// Add an event listener to the logo.
logo.addEventListener('click', () => {
  // Redirect to the home page.
  window.location.href = '/';
});

// This is just a basic example of how to handle the navigation bar.
// You can add more functionality to the navigation bar, such as:
// - Adding a dropdown menu for the "Products" link.
// - Adding a search bar to the navigation bar.
// - Adding a user profile menu to the navigation bar.