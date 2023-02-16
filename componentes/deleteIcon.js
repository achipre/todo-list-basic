const deleteBtn = () => {
  // Crear contenido con el input ingresado
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', deleteTask);

  return i;
}

const deleteTask = (e) => {
  const parent = e.target.parentElement;
  return parent.remove();
};
export default deleteBtn;