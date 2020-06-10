
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.sidenav');


function toggleMenu(visible) {
  sideMenu.classList.toggle('hidden', visible);
}

hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

window.addEventListener('resize', function() {
  if (window.innerWidth < 992) sideMenu.classList.add('hidden');
  else if (window.innerWidth > 993) sideMenu.classList.remove('hidden');
});