import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../../node_modules/flatpickr/dist/themes/material_orange.css';

const displayDays = document.querySelector('[data-days]');
const displayHours = document.querySelector('[data-hours]');
const displayMinutes = document.querySelector('[data-minutes]');
const displaySeconds = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');
let finishDate;
let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      finishDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

function countdown() {
  const timeDifference = finishDate - new Date();
  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    displayDays.textContent = '00';
    displayHours.textContent = '00';
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  displayDays.textContent = addLeadingZero(days);
  displayHours.textContent = addLeadingZero(hours);
  displayMinutes.textContent = addLeadingZero(minutes);
  displaySeconds.textContent = addLeadingZero(seconds);
}

function countdown1000() {
  clearInterval(countdownInterval);
  countdownInterval = setInterval(countdown, 1000);
}
btnStart.addEventListener('click', countdown1000);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
