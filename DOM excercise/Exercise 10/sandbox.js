const list = document.querySelector("#list");

list.addEventListener('click', e => {
    const items = e.target;

    if(e.target){
        e.target.remove();
    }
})
