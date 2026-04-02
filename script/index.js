'use strict';

const img_lampadina = document.querySelector('.lampada');
const btn_lapmada = document.querySelector('.btn-lampada');

function switch_lampada() {
    if (btn_lapmada.innerHTML.toLowerCase() === 'accendi') {
        img_lampadina.src = "./img/yellow_lamp.png";
        btn_lapmada.innerHTML  = 'Spegni';
    }else{
        img_lampadina.src = "./img/white_lamp.png";
        btn_lapmada.innerHTML  = 'Accendi';
    }
}

btn_lapmada.addEventListener('click', switch_lampada);