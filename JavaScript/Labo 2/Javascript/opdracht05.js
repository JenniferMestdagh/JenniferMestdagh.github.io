const setup = () => {
    let pElement = document.getElementById("wijzigen");
    pElement.addEventListener("click", wijzigen);
}

const wijzigen = () => {
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML="Welkom!";
}

window.addEventListener("load", setup);