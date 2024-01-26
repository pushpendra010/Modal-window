'use strict';

const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-model');
const btnsShowModel = document.querySelectorAll('.show-modal');
console.log(btnsShowModel);
for (let i = 0; i < btnsShowModel.length; i++) {
    console.log(btnsShowModel[i].textContent);
}
