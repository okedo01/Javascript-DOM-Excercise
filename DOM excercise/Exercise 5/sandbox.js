const element = document.getElementById('element');

const changeText = text => {
  if(text){
    element.innerText = 'Thanks!';
  }
  else{
    element.innerText = 'Hover Me';
  }
};

element.addEventListener('mouseenter', () => {
  changeText(true);
});

element.addEventListener('mouseleave', () => {
  changeText(false);
});