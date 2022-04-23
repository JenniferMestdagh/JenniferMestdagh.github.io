let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;
let arr = ['kaart1.png', 'kaart2.png', 'kaart3.png', 'kaart4.png', 'kaart5.png', 'kaart6.png'];

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
        cards[i].addEventListener("click", omdraaien);
    }
}

const omdraaien = (event) => {
    let clickedCard = event.target;
    clickedCard.src = clickedCard.getAttribute("data-card");

}

window.addEventListener("load", setup);