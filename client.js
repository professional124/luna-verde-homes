// client.js

// Highlight the active nav link based on current page URL
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
