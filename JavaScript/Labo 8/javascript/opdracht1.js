const setup = () => {
    let today = new Date();
    let birthday = new Date(2000,8,11);

    let verschil = (today - birthday) / (1000 * 60 * 60 * 24);

    console.log(Math.floor(verschil));
}
window.addEventListener("load", setup);