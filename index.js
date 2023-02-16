let welcomeText = document.querySelector('#welcomeText');
let hora = new Date().getHours();

console.log(hora);

let msgMañana = 'Good morning';
let msgTarde = 'Goog afternoon';
let msgNoche = 'Good evening';

if (hora >= 1 && hora < 12) {
    welcomeText.textContent = msgMañana;
} else if (hora >= 12 && hora < 19) {
    welcomeText.textContent = msgTarde;
} else if (hora > 19 && hora < 24) {
    welcomeText.textContent = msgNoche;
}

console.log(welcomeText);

