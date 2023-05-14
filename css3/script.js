const button = document.querySelector('.button');
const box = document.querySelector('.box');

button.addEventListener('click', () => {
  box.classList.toggle('animated');
});
