const form = document.getElementById('contact-form');
const errorElements = form.querySelectorAll('.contact-form__error');
const formMessage = form.querySelector('.form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  errorElements.forEach(el => el.textContent = '');
  formMessage.textContent = '';

  let isValid = true;

  const nameInput = form.elements['name'];
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, 'Введите имя минимум 2 символа');
    isValid = false;
  }

  const emailInput = form.elements['email'];
  if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, 'Введите корректный Email');
    isValid = false;
  }

  const messageInput = form.elements['message'];
  if (messageInput.value.trim().length < 5) {
    showError(messageInput, 'Сообщение должно содержать минимум 5 символов');
    isValid = false;
  }

  if (!isValid) return;

  formMessage.textContent = 'Отправка сообщения...';
  setTimeout(() => {
    formMessage.textContent = 'Спасибо! Ваше сообщение отправлено.';
    form.reset();
  }, 1600);
});

function showError(input, message) {
  const errorEl = input.nextElementSibling;
  if (errorEl) {
    errorEl.textContent = message;
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
