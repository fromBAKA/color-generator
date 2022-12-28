const body = document.querySelector("body");
const rgba = document.querySelector(".rgba");

setInterval (() => {

    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);

    body.style.background = `rgb(${x}, ${y}, ${z})`;
    rgba.innerHTML = `Votre rgb: (${x}, ${y}, ${z})`;
}, 1000);




































// const body = document.querySelector("body");
// const rgba = document.querySelector(".rgba");

// setInterval(() => {
    
//     let x = Math.floor(Math.random() * 255);
//     let y = Math.floor(Math.random() * 255);
//     let z = Math.floor(Math.random() * 255);

//     body.style.background = `rgb( ${x}, ${y}, ${z})`;
//     rgba.innerHTML = `Votre rgb:( ${x}, ${y}, ${z})`;
// }, 2000);