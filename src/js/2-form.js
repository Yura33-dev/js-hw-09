'use strict';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

const getFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (getFormState) {
  formData.email = getFormState.email;
  formData.message = getFormState.message;

  form.querySelector('[name="email"]').value = formData.email;
  form.querySelector('[name="message"]').textContent = formData.message;
}

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message)
    return alert('Fill please all fields');

  console.log(formData);

  formData.email = '';
  formData.message = '';

  e.target.elements.message.value = '';
  e.target.elements.email.value = '';

  localStorage.removeItem('feedback-form-state');
});
