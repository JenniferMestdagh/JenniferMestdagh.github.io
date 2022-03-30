const setup = () => {
   let button = document.getElementsByTagName('button');
   button[0].addEventListener('click', voegToe)
}

const voegToe = () => {
    let p = document.createElement('p');
    let div = document.querySelector('#myDIV');

    let tekst = document.createTextNode('text');
    p.appendChild(tekst)
    div.appendChild(p);
}

window.addEventListener("load", setup);