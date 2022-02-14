
const $items = document.querySelector('.items');
const $input = document.querySelector('.footer__input');
const $addBtn = document.querySelector('.footer__button');

$addBtn.addEventListener('click',()=>{
    onAdd();
});
$input.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        onAdd();
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
    const item_row = document.createElement('li'),
            item_divider = document.createElement('div'),
            item = document.createElement('div'),
            item_name = document.createElement('span'),
            item_delete = document.createElement('button');

    item_row.setAttribute('class','item__row');
    item_divider.setAttribute('class','item__divider');
    item_row.appendChild(item);
    item_row.appendChild(item_divider);

    item.setAttribute('class','item');
    item_name.setAttribute('class','item__name');
    item_name.innerHTML = text;

    item_delete.setAttribute('class','item__delete');
    item_delete.innerHTML = `<i class="fas fa-regular fa-trash"></i>`;
    item_delete.addEventListener('click',()=>{
        $items.removeChild(item_row);
    });
    
    item.appendChild(item_name);
    item.appendChild(item_delete);
    return item_row;
}
