const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let colorInterval = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startHandler() {
  const colorChange = getRandomHexColor();
  document.body.style.backgroundColor = colorChange;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  colorInterval = setInterval(() => {
    startHandler();
  }, 1000);
});
btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  clearInterval(colorInterval);
});
