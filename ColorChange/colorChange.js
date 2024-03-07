const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonStyles = window.getComputedStyle(button);
    const buttonBG = buttonStyles.getPropertyValue('background-color');
    body.style.background = buttonBG
  });
});
