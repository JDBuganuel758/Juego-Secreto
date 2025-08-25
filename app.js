let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

mensajesIniciales();

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Felicidades, acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto<numeroUsuario) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
    intentos++;
    limpiarCaja();    
    }
    return;
}
function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto! ');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    limpiarCaja();
    mensajesIniciales();
    document.getElementById('reiniciar')
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

console.log(intentos);

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los números:
    if(listaNumeroSorteado.length == numeroMaximo){
        listaNumeroSorteado = [];
        return generarNumeroSecreto();
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
