const humbargerBtn = document.querySelector('.humbarger-icon');
const closeBtn = document.querySelector('.close-icon');
const navigationItems = document.querySelector('.nav-items');
const navLink = document.querySelector('.nav-link');

const toggleMenu = () => {
  navigationItems.classList.toggle('show');
  humbargerBtn.classList.toggle('hide');
  closeBtn.classList.toggle('hide');
};

humbargerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

navLink.addEventListener('click', (event) => {
  event.preventDefault();
  const targetURL = navLink.getAttribute('href');
  window.location.href = targetURL;
});