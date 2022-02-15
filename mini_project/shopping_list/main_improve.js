
const $items = document.querySelector('.items');
const $form = document.querySelector('.new-text');
const $input = document.querySelector('.footer__input');
const $addBtn = document.querySelector('.footer__button');
let id = 0;

$form.addEventListener('submit',(e)=>{
    e.preventDefault();
    onAdd();
});

$items.addEventListener('click',event => {
    const id = event.target.dataset.id; //delete btn
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id = '${id}']`);
        toBeDeleted.remove();
    }
});

function onAdd(){
    const text = $input.value;
    if (text === ''){
        $input.focus();
        return;
    }
    const item = make_row(text); 
    $items.appendChild(item);
    
    item.scrollIntoView({block:'center'});//맨밑으로 스크롤
    $input.value = '';
    $input.focus();
}
function make_row(text){
    const item_row = document.createElement('li')
    item_row.setAttribute('class','item__row');
    item_row.setAttribute('data-id',id);
    item_row.innerHTML = `
        <li class="item__row">
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete"><i class="fas fa-regular fa-trash" data-id="${id}"></i></button>
            </div>
            <div class="item__divider"></div>
        </li>
    `;
    id++;
    return item_row;
}
