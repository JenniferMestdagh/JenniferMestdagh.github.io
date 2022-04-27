// de info tussen de haakjes gekopieer van de console uit deel1
const setup = () => {
    let student1 = JSON.parse('{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":null,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"]}');
    console.log(student1.familienaam);
    console.log(student1["voornaam"]);
}
window.addEventListener("load", setup);