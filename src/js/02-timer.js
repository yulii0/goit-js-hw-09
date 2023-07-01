import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  bodyStyle: document.querySelector('body'),
  timer: document.querySelector('.timer'),
  field: document.querySelector('.field'),
  value: document.querySelector('.value'),
  label: document.querySelector('.label'),
  valueDays: document.querySelector('[data-days]'),
  valueHours: document.querySelector('[data-hours]'),
  valueMinutes: document.querySelector('[data-minutes]'),
  valueSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
refs.startBtn.style.cssText = `
background-color: grey;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;

refs.bodyStyle.style.cssText = `
  display: flex; 
  gap: 20px; 
  align-items: center; 
  flex-direction: column;
`;

refs.timer.style.cssText = `
  display: flex; 
flex-direction: column;
  gap: 4px; 
  justify-content: center;
  margin-top: 20px; 
  font-weight: 500; 
  font-size: 24px; 
`;

refs.input.style.cssText = `
  // background-color: #08aa31; 
  font-size: large; 
  color: #black; 
  display: flex; 
  padding: 12px 4px; 
  border-radius: 8px;  
  text-align: center; 
  font-weight: 500; 
  font-size: 24px; 
  max-width: 308px;
`;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let ms = selectedDates[0] - options.defaultDate;
    if (ms <= 0) {
      Notiflix.Report.warning('Warning', 'Please choose a date in the future', 'Will do',
      {
        width: '320px',
        svgSize: '50px',
        messageFontSize: '18px',
        backgroundColor: '#bcebdd',
        warning: {
          svgColor: 'firebrick',
          buttonBackground: '#08aa31c2',
          buttonColor: 'black',
        },
      });
      
    } else {
      refs.startBtn.disabled = false;
      refs.startBtn.style.cssText = `
      background-color: #4CAF50;
      color: white;
      padding: 20px 40px;
      border: none;
      cursor: pointer;
      border-radius: 40px;
      font-size: 20px;`;

      refs.startBtn.addEventListener('click', () => {
        refs.input.disabled = true;
        refs.startBtn.disabled = true;

        const intervalId = setInterval(() => {
          ms = ms - 1000;

          function addLeadingZero(value) {
            return value.toString().padStart(2, '0');
          }
          const timeComponents = convertMs(ms);
          refs.valueDays.textContent = addLeadingZero(timeComponents.days);
          refs.valueHours.textContent = addLeadingZero(timeComponents.hours);
          refs.valueMinutes.textContent = addLeadingZero(
            timeComponents.minutes
          );
          refs.valueSeconds.textContent = addLeadingZero(
            timeComponents.seconds
          );
          if (
            refs.valueDays.textContent === '00' &&
            refs.valueHours.textContent === '00' &&
            refs.valueMinutes.textContent === '00' &&
            refs.valueSeconds.textContent === '00'
          ) {
            clearInterval(intervalId);
            refs.startBtn.disabled = true;
            refs.startBtn.style.cssText = `
            background-color: grey;
            color: white;
            padding: 20px 40px;
            border: none;
            cursor: pointer;
            border-radius: 40px;
            font-size: 20px;`;
          }
        }, 1000);
      });
    }
  },
};

const flatpickr = require('flatpickr');
flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}