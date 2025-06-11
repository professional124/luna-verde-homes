// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Language Selector
document.getElementById('language-selector').addEventListener('change', (e) => {
  const selectedLanguage = e.target.value;
  alert(`Language changed to: ${selectedLanguage}`);
  // Implement language change logic here
});

// Live Chat Toggle
document.getElementById('chat-button').addEventListener('click', () => {
  const chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('visible');
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
