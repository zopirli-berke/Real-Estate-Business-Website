const menuIcon = document.querySelector('#menu-icon');
const navItem = document.querySelector('.nav-item');

menuIcon.addEventListener('click', e => {
  navItem.classList.add('is-open-menu');
});
