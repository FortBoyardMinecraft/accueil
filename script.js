// script.js

// Détection mobile simple
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Appliquer des ajustements spécifiques mobile
function adaptForMobile() {
  if (isMobileDevice()) {
    document.body.classList.add('mobile');

    // Exemples d’adaptations :
    // Réduire la taille des iframes (comme Discord widget)
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      iframe.style.width = '100%';
      iframe.style.height = '300px';
    });

    // Réorganiser le header s’il y a plusieurs éléments
    const header = document.getElementById('main-header');
    if (header) {
      header.style.flexDirection = 'column';
      header.style.textAlign = 'center';
    }

    // Réduire les images trop grandes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });

    // Adapter les tailles de texte si besoin
    document.documentElement.style.fontSize = '14px';
  }
}

// Affichage dynamique des onglets
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

// Animation du header
window.addEventListener('load', () => {
  setTimeout(() => {
    const header = document.getElementById('main-header');
    if (header) header.classList.add('visible');
  }, 100);

  adaptForMobile(); // appel ici
});

