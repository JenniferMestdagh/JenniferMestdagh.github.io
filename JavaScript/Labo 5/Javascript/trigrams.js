const setup = () => {
    let woord = 'onoorbaar'

    let i = 0;
    while (i < woord.length){
        let stukjes = woord.slice(i, i + 3);

        if (stukjes.length === 3){
            console.log(stukjes);
        }
        i++;
    }
}

window.addEventListener("load", setup);