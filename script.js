// Selection: Button
const btn = document.querySelector('[data-form-btn]');
// Selection: Input
const input = document.querySelector('[data-form-input]');
// Selection: ul
const list = document.querySelector('[data-list]');

// Enfoca al inputa al recargar
input.focus();

const crearTarea = (e) => {
  // evitar que se recaergue el formulario;
  e.preventDefault();
  // crear Elemento il en el ul: con el data-list por cada click
  const task = document.createElement('li');
  // Agregar la clase card a la lista li recien creada
  task.classList.add('card');
  // Crear contenido con el input ingresado
  const content = `<div><i class="far fa-check-square icon"></i><span class="task">${input.value}</span></div><i class="fas fa-trash-alt trashIcon icon"></i>`;
  // Agregar la tarea generada al HTML
  task.innerHTML = content;
  // Agregar el contenido e=generado en el ul 
  list.appendChild(task);
  // Borrar el input al dar click
  input.value = '';
  // Enfoca al inputa al dar click en boton
  input.focus();
};

btn.addEventListener('click', crearTarea);