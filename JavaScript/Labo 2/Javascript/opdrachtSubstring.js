const setup = () => {
    let btnVoegToe = document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", splits);
}

const splits = () => {
    let txtInput = document.getElementById("txtInput").value;
    let txtLinks = document.getElementById("txtLinks");
    let txtRechts = document.getElementById("txtRechts");

    let resultaat = document.getElementById("resultaat");

    resultaat.innerHTML = txtInput.substring(txtLinks.value, txtRechts.value)
}


window.addEventListener("load", setup);