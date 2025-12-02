const menuButton = document.querySelector('.menu-outlook');
const mobileNav = document.querySelector('#mobile-menu');
const menuIcon = menuButton.querySelector('.menu-icon');

menuButton.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', isOpen);

  menuIcon.textContent = isOpen ? '✕' : '☰';
});
