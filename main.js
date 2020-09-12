let text = document.getElementById("nazwa-id");

let myHeading = document.querySelector('button');
myHeading.textContent = 'Klik';

myHeading.onclick =function() {
    alert('Kliknales tekst paragrafu <p>');
}

console.log(myHeading);