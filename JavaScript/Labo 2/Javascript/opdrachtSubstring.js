const setup = () => {
    let btnVoegToe = document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", splits);
}

const splits = () => {
    let txtLinks = document.getElementById("txtLinks");
    let txtRechts = document.getElementById("txtRechts");

    let btnVoegToe = document.getElementById("btnVoegToe");

    let txtInput = document.getElementById("txtInput").value
    txtInput.substring(txtLinks, txtRechts);
    resultaat.innerHTML = txtInput(txtLinks.value, txtRechts.value)
}


window.addEventListener("load", setup);