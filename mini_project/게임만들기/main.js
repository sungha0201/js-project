"use strict";

const game_field = document.querySelector('.game__field');
const fieldRect = game_field.getBoundingClientRect();

function initGame(){
    console.log(fieldRect);
}
initGame();