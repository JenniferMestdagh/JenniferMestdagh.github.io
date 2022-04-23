let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren

    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

let task;

const setup = () => {
    let target = document.getElementById("target")
    let knop = document.getElementById('button');
    knop.addEventListener("click", startSpel);
    target.addEventListener("click", hitTarget)
};

const startSpel = () => {
    task = setInterval(verplaatsImage, 1000);
}

const verplaatsImage = () => {
    let target = document.getElementById('target');
    let randomVerplaatsing = Math.ceil(Math.random() * global.IMAGE_COUNT) - 1;
    let x = Math.floor((Math.random() * 800) - 48);
    let y = Math.floor((Math.random() * 600) - 48);

    target.src = global.IMAGE_PATH_PREFIX + randomVerplaatsing + global.IMAGE_PATH_SUFFIX;
    target.style.left =  x + "px";
    target.style.top = y + "px";
}

const hitTarget = (event) => {
    let target = document.getElementById('target');
    let src = target.getAttribute("src");
    if(!src.includes("0.png")){
        global.score++;
        console.log(global.score);
    } else{
        alert('Game Over');
        console.log(global.score);
        clearInterval(task);
    }
}

window.addEventListener("load", setup);