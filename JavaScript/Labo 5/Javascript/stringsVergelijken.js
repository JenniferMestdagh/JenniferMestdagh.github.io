const setup = () => {
    let string1 = "Dit is een string";
    let string2 = "string2";
    let slicezin = "Dit is een string met slice";
    let slice = slicezin.slice();

    console.log(string1 + " + " + string2);
    console.log("_______________________");
    console.log(slice);
    console.log("_______________________");
    console.log(slice.concat());
    console.log("_______________________");
}

window.addEventListener("load", setup);