
const buttonElem = document.querySelector('#wrapper').secondElementChild;
const inputElem =  document.querySelector('#wrapper').firstElementChild;

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});