const setup = () => {
}
window.addEventListener("load", setup);


// Probeer eerst eens elk van de drie soorten popups uit in een javascript programma
console.log("dit is een mededeling op de console");

window.alert("Dit is een mededeling");
window.confirm("Weet u het zeker?");

// Wat is de return value van de confirm functie als de gebruiker op een van de buttons klikt?
// De pop-up verdwijnd

// Zet nu de return value van de prompt call op de console als je een tekst intypt en op 'ok' drukt.
let naam = window.prompt("Wat is uw naam", "onbekend");
console.log(naam);

// Wat is de return value van de prompt functie als de gebruiker een tekst intypt en op 'ok' klikt?
// De ingevulde tekst wordt opgeslagen

//   Wat is de return value van de prompt functie als de gebruiker op 'cancel' klikt?
// De defaulttekst wordt gebruikt, hier "onbekend"