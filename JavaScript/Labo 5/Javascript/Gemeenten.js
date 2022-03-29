const setup = () => {
    let select = document.getElementById("gemeentes");
    let gemeente;
    let gemeenten = [];
    const compare = (a, b) => {
        return a.localeCompare(b);
    }
    do {
        gemeente = window.prompt('Geef een gemeente ').toLowerCase()
        gemeenten.push(gemeente);
    } while (gemeente.toLowerCase() !== 'stop'.toLowerCase())
    gemeenten.sort(compare);
    for (gemeente of gemeenten) {
        let option = document.createElement("option");

        if(gemeente === 'stop') {
            return;
        }
        option.value = gemeente;
        option.text = gemeente;
        console.log(gemeente)

        select.appendChild(option)
    }
}
window.addEventListener("load", setup)