import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  bodyStyle: document.querySelector('body'),
  form: document.querySelector('form'),
  button: document.querySelector('button'),
  label: document.querySelectorAll('label'),
  input: document.querySelectorAll('input'),
};

refs.label.forEach(element => {
  element.style.cssText = `
  display: flex; 
  row-gap: 8px;
  flex-direction: column; 
  font-size: 14px;
  align-items: center;
  font-weight: 700;`;
  
  
});

refs.input.forEach(element => {
  element.style.cssText = `    
  width: 100%;
  color: black;
  font-size: 14px;
  background-color: #e4f2d8;
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
  }`;
});

refs.button.style.cssText = `
background-color: #4CAF50;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;

refs.form.style.cssText = `
  padding: 10px 20px; 
  border-radius: 8px; 
  display: flex; 
  gap: 20px; 
  align-items: center;
  flex-direction: column;
  max-width: 320px;
  width: 80%; 
  border-radius: 10px; 
  padding: 20px;`;

refs.bodyStyle.style.cssText = `
display: flex; 
gap: 20px; 
align-items: center; 
flex-direction: column;`;

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    delay: Number(refs.form.delay.value),
    step: Number(refs.form.step.value),
    amount: refs.form.amount.value,
  };

  let delay = formData.delay;

  for (let i = 0; i < formData.amount; i++) {
    createPromise(formData.delay, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`
      })

      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += formData.step;
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}