import flatpickr from '../../node_modules/flatpickr';
import '../../node_modules/flatpickr/dist/themes/material_orange.css';

const displayDays = document.querySelector('[data-days]');
const displayHours = document.querySelector('[data-hours]');
const displayMinutes = document.querySelector('[data-minutes]');
const displaySeconds = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      console.log('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
  const days = Math.floor(ms / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds };
}
