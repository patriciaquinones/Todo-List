export default (date) => {
  const dateElement = document.createElement('p');
  dateElement.classList.add('date');
  dateElement.innerHTML = date;
  return dateElement;
};
