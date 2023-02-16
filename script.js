( () => {
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
  // crear Elemento il
  const task = document.createElement('li');
  // crear Elemento div
  const taskContent = document.createElement('div');
  // crear Elemento span
  const titleTask = document.createElement('span');
  
  // Agregar el contenido generado en el ul 
  taskContent.appendChild(checkComplete());
  // Agregar la clase card a la lista li recien creada
  task.classList.add('card');
  // Crear contenido con el input ingresado
  titleTask.classList.add('task');
  // Crear contenido con el input ingresado
  const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
  // Agregar la tarea generada al HTML
  task.innerHTML = content;
  // Agregar la tarea generada al HTML
  titleTask.innerText = input.value;
  // Agregar el contenido e=generado en el ul 
  taskContent.appendChild(titleTask);
  // Agregar el contenido e=generado en el ul 
  list.appendChild(task);
  // Agregar el contenido e=generado en el ul 
  task.appendChild(taskContent);
  // Borrar el input al dar click
  input.value = '';
  // Enfoca al inputa al dar click en boton
  input.focus();
};

btn.addEventListener('click', crearTarea);

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', completeTask)

  return i
};
const completeTask = (e) => {
  const elemet = e.target;
  elemet.classList.toggle('fas')
  elemet.classList.toggle('completeIcon')
  elemet.classList.toggle('far')
};
})();