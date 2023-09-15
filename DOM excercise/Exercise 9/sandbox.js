const button = document.getElementById('button');

// const checkBox = document.querySelector('#checkbox');

button.addEventListener('click', (e) => {
    
    const checkBox = e.target.previousElementSibling.firstElementChild;

    // if(checkBox){
    //     checkBox.checked = true;
    // }        
    // else{
    //     checkBox.checked = false;
    // }  
    
     checkBox.checked = !checkBox.checked;
    
    
});



