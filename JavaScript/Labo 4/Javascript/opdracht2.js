const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", klikButton);
}

const klikButton = (event) => {
    event.preventDefault();
    let woord = document.getElementById("woord").value;
    maakMetSpaties(woord);
}

const maakMetSpaties = (woord) => {
    let resultaat = "";
    for(let i=0; i < woord.length; i++){
        const char = woord.charAt(i);
        resultaat += char + " ";
    }
    console.log(resultaat);
}

window.addEventListener("load", setup);