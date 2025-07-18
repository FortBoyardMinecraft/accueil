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

  // script.js

function applyMobileAdjustments() {
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Header
    const header = document.querySelector('header');
    if (header) {
      header.style.flexDirection = 'column';
      header.style.alignItems = 'center';
      header.style.padding = '1rem 0.5rem';
    }

    // Logo dans header
    const logo = document.querySelector('header img.logo');
    if (logo) {
      logo.style.height = '40px';
      logo.style.marginBottom = '0.5rem';
    }

    // Intro logo
    const introLogo = document.querySelector('.intro img');
    if (introLogo) {
      introLogo.style.width = '80vw';
      introLogo.style.height = 'auto';
      introLogo.style.objectFit = 'contain';
    }

    // Nav icons
    const navIcons = document.querySelector('.nav-icons');
    if (navIcons) {
      navIcons.style.position = 'static';
      navIcons.style.display = 'flex';
      navIcons.style.justifyContent = 'center';
      navIcons.style.marginTop = '0.5rem';
      navIcons.style.width = '100%';
      navIcons.style.gap = '1rem';
    }

    // Nav center
    const navCenter = document.querySelector('.nav-center');
    if (navCenter) {
      navCenter.style.flex = '1 1 auto';
      navCenter.style.display = 'flex';
      navCenter.style.justifyContent = 'center';
      navCenter.style.flexWrap = 'wrap';
      navCenter.style.gap = '0.5rem';
    }

    // Body font size smaller
    document.body.style.fontSize = '14px';
  }
}

// Appeler au chargement
window.addEventListener('load', applyMobileAdjustments);

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

