document.addEventListener('DOMContentLoaded', () => {
  const openBackdrop = document.querySelector('.burger-open-btn');
  const closeBackdrop = document.querySelector('.burger-close-btn');
  const backdrop = document.querySelector('.backdrop');
  const navLinks = document.querySelectorAll('.bg-nav-list-link');

  const path = window.location.pathname;

  const isLightPage =
    path.includes('cookies-policy.html') ||
    path.includes('privacy-policy.html') ||
    path.includes('terms-and-conditions.html');

  if (isLightPage) {
    document.body.classList.add('light-theme');


    const burgerIcon = document.querySelector('.burger-menu-img');
    if (burgerIcon) {
      burgerIcon.src = './img/mobile/dark-burger-ico.png';
    }
  }

  function toggleMenu(show) {
    backdrop.classList.toggle('show', show);
    openBackdrop.style.display = show ? 'none' : 'block';
    closeBackdrop.style.display = show ? 'block' : 'none';
  }


  openBackdrop?.addEventListener('click', () => toggleMenu(true));
  closeBackdrop?.addEventListener('click', () => toggleMenu(false));

  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });



});