// Sticky header shadow toggle on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetID = anchor.getAttribute('href').substring(1);
    const targetElem = document.getElementById(targetID);
    if(targetElem) {
      targetElem.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Contact form submit handler (basic example)
const contactForm = document.querySelector('form#contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    contactForm.reset();
  });
}
