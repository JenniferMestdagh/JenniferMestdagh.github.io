const setup = () => {
    const sliders = document.getElementsByClassName("slider");
    let knop = document.getElementById("save");
    knop.addEventListener("click", save)

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const save = () => {
    let hokje = document.getElementById("hokje");
    let nieuwHokje = document.createElement('div');
    let kruisje = document.createElement('button');
    let body = document.getElementsByTagName('body')[0];

    kruisje.textContent = "X";
    kruisje.addEventListener("click", remove);

    let kleur;
    if(hokje.style.backgroundColor === "") {
        kleur = 'white';
    } else {
        kleur = hokje.style.backgroundColor;
    }

    nieuwHokje.style.backgroundColor = kleur;
    nieuwHokje.style.width = "75px";
    nieuwHokje.style.height = "75px";
    nieuwHokje.style.borderRadius = "100%";

    nieuwHokje.appendChild(kruisje);
    nieuwHokje.addEventListener("click", veranderTerug);
    body.appendChild(nieuwHokje);

    localStorage.setItem('kleurenStorage', JSON.stringify(kleur));
}

const remove = (event) => {
    let hokje = event.target.parentElement;
    hokje.remove();
}

const veranderTerug = (event) => {
    let hokje = event.target;
    let kleurHokje = document.getElementById('hokje');

    kleurHokje.style.backgroundColor = hokje.style.backgroundColor;
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