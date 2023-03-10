const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'none';
  document.querySelector('.close').style.display = 'inline';
  document.querySelector('.mobile-nav').style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'inline';
  document.querySelector('.close').style.display = 'none';
  document.querySelector('.mobile-nav').style.display = 'none';
});