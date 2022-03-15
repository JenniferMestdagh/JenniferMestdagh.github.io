const setup = () => {
    const sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    const sliders = document.getElementsByClassName("slider");
    let labels = document.getElementsByTagName("label");
    let kleurRood = sliders[0].value;
    let kleurGroen = sliders[1].value;
    let kleurBlauw = sliders[2].value;

    let hokje = document.getElementById("hokje");

    labels[0].textContent = 'red: ' + kleurRood;
    labels[1].textContent = 'green: ' + kleurGroen;
    labels[2].textContent = 'blue: ' + kleurBlauw;

    hokje.style.backgroundColor= `rgb(${kleurRood},${kleurGroen}, ${kleurBlauw})`
}

window.addEventListener("load", setup);