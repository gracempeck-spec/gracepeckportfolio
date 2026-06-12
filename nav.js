/* ============================================================
   nav.js — shared across all pages
============================================================ */

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
}

// Highlight active nav link based on current filename
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

// Scroll shadow on nav
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 10);
});

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    const delay = el.dataset.delay || (i % 6) * 80;
    el.style.transitionDelay = delay + 'ms';
    io.observe(el);
  });
});
