let personen = [];

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    let invalid = document.getElementsByClassName("invalid");

    if (invalid.length === 0) {
        let lstPersonen = document.getElementById("lstPersonen");

        // -1 wordt teruggegeven als niks geselecteerd is => de persoon bestaat nog niet
        // hier if not -1 dus persoon bestaat al! Persoon moet aangepast worden
        if (lstPersonen.selectedIndex !== -1) {
            let persoon = personen[lstPersonen.selectedIndex];

            persoon.voornaam = document.getElementById("txtVoornaam").value
            persoon.familienaam = document.getElementById("txtFamilienaam").value
            persoon.geboortedatum = document.getElementById("txtGeboorteDatum").value
            persoon.mail = document.getElementById("txtEmail").value
            persoon.aantalKinderen = document.getElementById("txtAantalKinderen").value
        }

        // als persoon nog niet bestaat, dus nieuwe persoon aanmaken!
        else {
            const persoon = {
                voornaam: document.getElementById("txtVoornaam").value,
                familienaam: document.getElementById("txtFamilienaam").value,
                geboortedatum: document.getElementById("txtGeboorteDatum").value,
                mail: document.getElementById("txtEmail").value,
                aantalKinderen: document.getElementById("txtAantalKinderen").value
            }

            // aanmaken option element in dropdown
            let naamToevoegen = document.createElement("option");
            // textnode aanmaken want anders kan je het niet toekennen aan dropdown
            let txtToevoegen = document.createTextNode(persoon.voornaam + " " + persoon.familienaam);
            // option in dropdown steken
            naamToevoegen.appendChild(txtToevoegen);
            //tekst in option steken
            lstPersonen.appendChild(naamToevoegen);
            // wanneer erop geklikt wordt zullen aangepast worden naar de juiste data
            naamToevoegen.addEventListener("click", namenBijhouden);

            // persoon toevoegen in array
            personen.push(persoon);
        }
        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    }
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

    document.getElementById("txtVoornaam").value ="";
    document.getElementById("txtFamilienaam").value ="";
    document.getElementById("txtGeboorteDatum").value ="";
    document.getElementById("txtEmail").value ="";
    document.getElementById("txtAantalKinderen").value ="";

    // deselecteren
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
}

const namenBijhouden = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let persoon = personen[lstPersonen.selectedIndex];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
    document.getElementById("txtEmail").value = persoon.mail;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
}

window.addEventListener("load", setup);