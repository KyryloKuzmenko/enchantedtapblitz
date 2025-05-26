document.addEventListener('DOMContentLoaded', () => {
  const openBackdrop = document.querySelector('.burger-open-btn');
  const closeBackdrop = document.querySelector('.burger-close-btn');
  const backdrop = document.querySelector('.backdrop');

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
});