import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

const refs = {
  formRef: document.querySelector('.feedback-form'),
  textareaRef: document.querySelector('.feedback-form textarea'),
  emailRef: document.querySelector('.feedback-form input'),
};
refs.formRef.addEventListener('submit', onFormSubmit);
refs.formRef.addEventListener(
  'input',
  throttle(() => {
    formData.email = refs.emailRef.value;
    formData.message = refs.textareaRef.value;
    console.log(formData);
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
  }, 500),
);

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}
function populateTextarea() {
  const savedDataOfTextarea = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (savedDataOfTextarea) {
    refs.emailRef.value = savedDataOfTextarea.email;
    refs.textareaRef.value = savedDataOfTextarea.message;
    formData.email = savedDataOfTextarea.email;
    formData.message = savedDataOfTextarea.message;
  }
}
