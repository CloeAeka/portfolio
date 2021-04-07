let blocText = document.querySelector(".text");
let textToDisplay = "Hello, i'm a text";
let i = 0;

window.addEventListener('load', myFunction);

function myFunction() {
    blocText.innerHTML = blocText.innerHTML+textToDisplay.charAt(i);
    i++;
    setTimeout(myFunction, 300);
}
myFunction();

