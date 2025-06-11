// Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => observer.observe(el));
});

// Contact form placeholder
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    contactForm.reset();
  });
}

// Newsletter placeholder
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Subscribed! Watch your inbox for updates.');
    newsletterForm.reset();
  });
}

// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
  // Initialize theme
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

// Language Selector Stub
const langToggle = document.querySelector('.lang-toggle');
if (langToggle) {
  langToggle.addEventListener('change', () => {
    alert(`Switching to ${langToggle.value} (stub)`);
    // Real implementation would load translations or redirect.
  });
}

// Live Chat Stub
;(function(){
  window.LiveChatAPI = window.LiveChatAPI||function(){
    (LiveChatAPI.q=LiveChatAPI.q||[]).push(arguments)
  };
  LiveChatAPI('init', { app_id: 'YOUR_APP_ID' });
  // Real chat script would be loaded here
})();

// Booking Widget Stub
document.addEventListener('DOMContentLoaded', () => {
  const booking = document.getElementById('booking-widget');
  if (booking) {
    booking.innerHTML = '<p>[Booking calendar will load here]</p>';
  }
});

// Floorplan Configurator Stub
document.addEventListener('DOMContentLoaded', () => {
  const fp = document.getElementById('floorplan-config');
  if (fp) {
    fp.innerHTML = '<p>[Floor-plan configurator will load here]</p>';
  }
});
