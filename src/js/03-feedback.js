import throttle from 'lodash.throttle';

const FORM_LS = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handlerForm, 500));
form.addEventListener('submit', handlerBtn);

let inform = JSON.parse(localStorage.getItem(FORM_LS)) ?? {};
const { email, message } = form.elements;
email.value = inform.email ?? '';
message.value = inform.message ?? '';

function handlerForm(evt) {
  inform[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_LS, JSON.stringify(inform));
}

function handlerBtn(evt) {
  evt.preventDefault();
  console.log(inform);
  form.reset();
  localStorage.removeItem(inform);
}
