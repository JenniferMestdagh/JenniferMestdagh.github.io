let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;
let arr = ['kaart1.png', 'kaart2.png', 'kaart3.png', 'kaart4.png', 'kaart5.png', 'kaart6.png'];
let geselecteerdeKaarten = 0;

const setup = () => {
    genereerKaartjes();
    setTimeout(verbergKaartjes, 5000);
}

const genereerKaartjes = () => {
    let randomNumber = Math.ceil(Math.random() * 6);
    let playField = document.getElementById('playField');

    for (let i = 0; i < AANTAL_KAARTEN; i++){
        let card = document.createElement('img');
        card.src = 'images/' + arr[i];
        playField.appendChild(card);
        card.className = "card";
        card.setAttribute("data-card",'images/' + arr[i]);

        let card2 = document.createElement('img');
        card2.src = 'images/' + arr[i];
        playField.appendChild(card2);
        card2.className = "card";
        card2.setAttribute("data-card",'images/' + arr[i]);
    }
}

const verbergKaartjes = () => {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; cards.length; i++){
        cards[i].src = 'images/achterkant.png';
        cards[i].addEventListener("click", selecteer);
    }
}

const selecteer = (f) => {
    let clickedCard = event.target;
    clickedCard.src = clickedCard.getAttribute("data-card");
    clickedCard.classList.toggle("geselecteerd")

    if(document.getElementsByClassName("geselecteerd").length === 2){
        vergelijk();
    }
}

const vergelijk = () => {
    let kaart1 = document.querySelectorAll(".geselecteerd")[0];
    let kaart2 = document.querySelectorAll(".geselecteerd")[1];

    kaart1.classList.toggle("geselecteerd");
    kaart2.classList.toggle("geselecteerd");

    if (kaart1.getAttribute("data-card") === kaart2.getAttribute("data-card")){
        kaart1.classList.add("juist");
        kaart2.classList.add("juist");
    } else {
        kaart1.classList.add("fout");
        kaart2.classList.add("fout");
    }

    let timeoutId = setTimeout(reset, 2500);
}

const reset = () => {
    if (document.querySelectorAll(".juist").length !== 0){
        let kaart1 = document.querySelectorAll(".juist")[0];
        let kaart2 = document.querySelectorAll(".juist")[1];

        kaart1.classList.toggle("juist");
        kaart2.classList.toggle("juist");

        kaart1.classList.add("verwijder");
        kaart2.classList.add("verwijder");
    } else if (document.querySelectorAll(".fout").length !== 0){
        let kaart1 = document.querySelectorAll(".fout")[0];
        let kaart2 = document.querySelectorAll(".fout")[1];


        kaart1.src = 'images/achterkant.png';
        kaart2.src = 'images/achterkant.png';
        kaart1.classList.toggle("fout");
        kaart2.classList.toggle("fout");

    }

    geselecteerdeKaarten = 0;
}

window.addEventListener("load", setup);