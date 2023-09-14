const button = document.querySelector("#button");

const removeRedCircle = e => {
  const redCircle = e.target.previousElementSibling;
  redCircle.remove();
};

button.addEventListener('click', removeRedCircle);
