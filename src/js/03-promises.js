const form = document.querySelector('.form');
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const callout = e => {
  e.preventDefault();
  const firstDelay = parseInt(form.delay.value, 10);
  const delayStep = parseInt(form.step.value, 10);
  const promiseAmount = parseInt(form.amount.value, 10);
  for (let i = 0; i < promiseAmount; i++) {
    createPromise(i + 1, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};
form.addEventListener('submit', callout);
