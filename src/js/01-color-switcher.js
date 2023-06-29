const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyStyles : document.querySelector('body')
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const COLORCHANGE_DELAY = 1000;
let intervalId = null;
refs.stopBtn.disabled = true;



function onStartBtnClick(){
  intervalId = setInterval(() => {
    refs.bodyStyles.style.backgroundColor = getRandomHexColor();
  },COLORCHANGE_DELAY);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  refs.stopBtn.style.cssText = `
background-color: #f44336;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;

refs.startBtn.style.cssText = `
background-color: grey;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;

};

function onStopBtnClick(){
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  refs.startBtn.style.cssText = `
background-color: #4CAF50;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;

refs.stopBtn.style.cssText = `
background-color: grey;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;
};

refs.bodyStyles.style.cssText = `
display: flex; 
gap: 20px; 
align-items: center;
justify-content: center;
padding-top: 200px;`;


refs.startBtn.style.cssText = `
background-color: #4CAF50;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;

refs.stopBtn.style.cssText = `
background-color: #f44336;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}