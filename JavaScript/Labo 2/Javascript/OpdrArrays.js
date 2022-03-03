const setup = () => {
}
window.addEventListener("load", setup);

/* -------------------------------------------------------------------------------*/

let namen = ["Angel Merlier", "Lucas Pauwels", "Collin Buckens", "Roald Devos", "Justine Lapauw"];
// schrijf naar de console hoeveel elementen de array bevat
console.log(namen.length);

// schrijf het eerste, derde en vijfde element uit de array naar de console
console.log(namen[0]);
console.log(namen[2]);
console.log(namen[4]);

// Vraag met prompt() een extra naam op en voeg deze toe aan de Array. Probeer dit via een zelf
// geschreven functie VoegNaamToe. Maak gebruik van pass‐by‐reference. Schrijf vervolgens het
// resultaat naar de console.
let VoegNaamToe = () => {
    namen.push(window.prompt("Wat is uw naam", "onbekend"));
}

// Converteer de array naar een string en toon deze op de console.
console.log(namen.toString());