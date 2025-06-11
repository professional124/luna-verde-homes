// Dark Mode Toggle
document.getElementById('dark-mode-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Language Selector
document.getElementById('language-selector')?.addEventListener('change', (e) => {
  const selectedLanguage = e.target.value;
  alert(`Language changed to: ${selectedLanguage}`);
  // Future: implement translation swap logic here
});

// Live Chat Toggle
document.getElementById('chat-button')?.addEventListener('click', () => {
  const chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('visible');
});

// Scroll Fade-In Animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Smooth Scroll (if needed for in-page nav)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Submission (placeholder)
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been submitted!');
  this.reset();
});

// Newsletter Form Submission (placeholder)
document.getElementById('newsletter-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Subscribed to the newsletter!');
  this.reset();
});

// Service Worker Registration (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(err => {
        console.error('Service Worker registration failed:', err);
      });
  });
}

// Simulated Booking Widget Placeholder
document.getElementById('booking-button')?.addEventListener('click', () => {
  alert('Booking widget coming soon!');
});

// Floor Plan iframe popup (stub)
document.getElementById('floor-plan-button')?.addEventListener('click', () => {
  alert('Dynamic floor plan feature coming soon!');
});
