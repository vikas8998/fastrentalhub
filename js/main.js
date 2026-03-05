// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Sticky nav shadow on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Video fallback: show animated beach scene if video fails to load (desktop only)
const heroVideo = document.querySelector('.hero-video');
const heroFallback = document.getElementById('hero-fallback');

if (heroVideo && heroFallback) {
  const showFallback = () => {
    heroVideo.style.display = 'none';
    heroFallback.classList.add('active');
  };

  heroVideo.addEventListener('error', showFallback);

  const source = heroVideo.querySelector('source');
  if (source) {
    source.addEventListener('error', showFallback);
  }

  setTimeout(() => {
    if (heroVideo.readyState === 0 && heroVideo.networkState === 3) {
      showFallback();
    }
  }, 2000);
}

// Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
