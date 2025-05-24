const mainMessage = document.querySelector('#main_text');

mainMessage.innerHTML = 'Pierina, me gustas tanto que a veces con solo mirarte me siento embriagado.';

function changeMainText() {
    setTimeout(() => {
        mainMessage.innerHTML = '¿Sabes?';
    }, 4500);
    setTimeout(() => {
        mainMessage.innerHTML = 'Mientras más te veo, más quedo encantado con tu cuerpo; tu sonrisa, tus hipnotizantes ojos y cada cosa que logro apreciar de ti...';
    }, 7000);
    setTimeout(() => {
        mainMessage.innerHTML = 'No te imaginas lo que sentí aquella noche y lo que estoy sintiendo ahora mismo...';
        setTimeout(() => {
            mainMessage.innerHTML = 'Te quiero, Pierina. Te quiero mucho❤️.';
        }, 4500);
    }, 12000);
}

changeMainText();