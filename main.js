const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach( (placeholder) =>{
    placeholder.addEventListener('dragover', dragover) //Если над плейсхолдером
    placeholder.addEventListener('dragenter', dragenter) //Если плейсхолдер задет
    placeholder.addEventListener('dragleave', dragleave) //Если уходит из  плейсхолдера 
    placeholder.addEventListener('drop', dragdrop) //Отпускание
} );

function dragstart(event){
    event.target.classList.add('hold');
    setTimeout(()=> event.target.classList.add('hide'), 0)
}

function dragend(event){
    // эквивалентны event.target.classList.remove('hold', 'hide');
    event.target.className = 'item';
}

function dragover(event){
    event.preventDefault();
}

function dragenter(event){
    event.target.classList.add('hovered');
}

function dragleave(event){
    event.target.classList.remove('hovered');
}

function dragdrop(event){
    event.target.classList.remove('hovered');
    event.target.append(item);
}