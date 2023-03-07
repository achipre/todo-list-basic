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
export default checkComplete;