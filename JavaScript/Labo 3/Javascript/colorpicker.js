const setup = () => {
    const sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    const sliders = document.getElementsByClassName("slider");
    let kleurRood = sliders[0].value;
    let kleurGroen = sliders[1].value;
    let kleurBlauw = sliders[2].value;

    let hokje = document.getElementById("hokje");
    hokje.style.backgroundColor=
}

window.addEventListener("load", setup);