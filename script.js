// Selection: Button
const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');
input.focus();

const crearTarea = (e) => {
  e.preventDefault();
  console.log(input.value);
};

btn.addEventListener('click', crearTarea);