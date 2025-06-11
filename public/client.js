// Smooth page transitions with fade out/in
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');

      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });

  // Fade-in animation on scroll
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Add fade-out class on link click for transition effect
document.body.classList.remove('fade-out');
