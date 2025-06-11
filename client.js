// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.section');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact form validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');
    let valid = true;
    let errorMessages = [];

    if (!name.value.trim()) {
      valid = false;
      errorMessages.push("Please enter your name.");
    }

    if (!email.value.trim() || !validateEmail(email.value.trim())) {
      valid = false;
      errorMessages.push("Please enter a valid email.");
    }

    if (!message.value.trim()) {
      valid = false;
      errorMessages.push("Please enter a message.");
    }

    if (!valid) {
      e.preventDefault();
      alert(errorMessages.join('\n'));
    }
  });
}

function validateEmail(email) {
  // Simple email regex
  return /^\S+@\S+\.\S+$/.test(email);
}
