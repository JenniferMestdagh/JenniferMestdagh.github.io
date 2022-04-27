const student1 = {
    voornaam : "Jan",
    familienaam : "Janssens",
    geboorteDatum : new Date("1993‐12‐31"),
    adres : { straat : "Kerkstraat 13", postcode : "8500", gemeente : "Kortrijk" },
    isIngeschreven : true,
    namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array aantalAutos : 2
}

let tekst = JSON.stringify(student1);

const setup = () => {
    console.log(tekst)
}
window.addEventListener("load", setup);