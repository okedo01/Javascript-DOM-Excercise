const button = document.querySelector('#wrapper button');

const changeInput = () => {

  const input = document.querySelector('#inputEl');
  
  if(input){
    input.value = 'Hello World!';
  }

};

button.addEventListener('click', changeInput);

input.setAttribute('id', 'inputEl');