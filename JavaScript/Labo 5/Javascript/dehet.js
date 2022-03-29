const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let arrayZin = zin.split(" ");

    for (let i = 0; i < arrayZin.length; i++){
        if(arrayZin[i] === "de"){
            arrayZin[i] = "het";
        }
    }
    let resultaat = arrayZin.join(" ");
    console.log(resultaat);
}
window.addEventListener("load", setup);