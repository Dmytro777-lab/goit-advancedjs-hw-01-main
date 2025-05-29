const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

if (formData.email) form.elements.email.value = formData.email;
if (formData.message) form.elements.message.value = formData.message;

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log('Sending data:', formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {};
});
