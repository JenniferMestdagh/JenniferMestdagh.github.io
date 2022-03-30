const setup = () => {
    let lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++){
        lis[i].classList.add("listItem");
    }

    let body = document.querySelector('body');
    let img = document.createElement('img');
    img.setAttribute('src', '../images/gingermens.jpg');
    body.appendChild(img);

}
window.addEventListener("load", setup);