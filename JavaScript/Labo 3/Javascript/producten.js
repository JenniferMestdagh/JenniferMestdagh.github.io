const setup = () => {

    let knop = document.getElementById("knop");
    knop.addEventListener("click", berekenBedrag)

}
const berekenBedrag = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let input = document.getElementsByTagName("input");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");

    // omzeten in number van String
    let subtotaal1 = parseFloat(prijzen[0].textContent) + parseFloat(prijzen[0].textContent) * parseFloat(input[0].value) * parseInt(btw[0].textContent) / 100;
    subtotaal[0].textContent = subtotaal1.toFixed(2);

    let subtotaal2 = parseFloat(prijzen[1].textContent) + parseFloat(prijzen[0].textContent) * parseFloat(input[1].value) * parseInt(btw[1].textContent) / 100;
    subtotaal[1].textContent = subtotaal2.toFixed(2);

    let subtotaal3 = parseFloat(prijzen[2].textContent) + parseFloat(prijzen[0].textContent) * parseFloat(input[2].value) * parseInt(btw[2].textContent) / 100;
    subtotaal[2].textContent = subtotaal3.toFixed();

    totaal.textContent = (subtotaal1 + subtotaal2 + subtotaal3).toFixed(2);
}

window.addEventListener("load", setup);