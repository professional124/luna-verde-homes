// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Sticky header shadow toggle on scroll
  const header = document.querySelector('.sticky-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Responsive nav menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when clicking a nav link (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Smooth page transitions (fade out on link click)
  document.querySelectorAll('a[href]').forEach(link => {
    // Ignore external links and anchors
    if (link.host !== window.location.host || link.getAttribute('href').startsWith('#')) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = link.href;
      }, 400);
    });
  });

  // Fade in on page load
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '1';
  }, 50);

  // Contact form validation and submission simulation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (contactForm.checkValidity()) {
        alert('Thank you for contacting Luna Verde Homes! We will get back to you shortly.');
        contactForm.reset();
      } else {
        alert('Please fill out all required fields correctly.');
      }
    });
  }

  // Newsletter form validation and submission simulation
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput.checkValidity()) {
        alert(`Thanks for subscribing with ${emailInput.value}!`);
        newsletterForm.reset();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
});
