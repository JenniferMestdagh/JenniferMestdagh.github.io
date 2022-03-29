const setup = () => {
    let output = document.getElementById('output');

    let checkbox = document.getElementById('roker').checked;
    let radio = document.getElementsByTagName("language");
    let buurland = document.getElementById("land");
    let multicheck = document.getElementsByName("bestelling").options;

    if (checkbox === true){
        console.log("is een roker \n");
    } else {
        console.log("is geen roker \n");
    }

    console.log("moedertaal is " + radio.value + "\n");
    console.log("favoriete buurland is " + buurland.value + "\n");

    for(let i = 0; i < multicheck.length; i++){
        if(multicheck.selected === true) {
            console.log("bestelling bestaat uit " + multicheck.value + "\n");
        }
    }
}

let button = document.getElementById('button')
button.addEventListener("click", setup);