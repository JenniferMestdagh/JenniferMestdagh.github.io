const setup = () => {
    let zin = document.getElementById("zin").textContent;

    let count = 0;
    while (zin.indexOf("an") !== -1){
        zin = zin.toLowerCase().substring(zin.indexOf("an") + 1);
        count++;
    }
    console.log(count);
}

window.addEventListener("load", setup);
