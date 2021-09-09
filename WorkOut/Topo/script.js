const agujeros = document.querySelectorAll('.agujero');
const tableroPuntos = document.querySelector('#tableroPuntos');
const topos = document.querySelectorAll('.topo');
const dificultad = document.querySelector("#desplegableDificultad")

let ultimoAgujero;
let tiempoFinalizado = false;
let puntaje;

function calcularTiempoAleatorio(minimo, maximo){
    return Math.round(Math.random() * (maximo - minimo) * minimo);
}

function calcularAgujeroAleatorio(agujero) {
    const ubicacion = Math.floor(Math.random()*agujeros.length);
    const agujeroExtraido = agujeros[ubicacion];

    if( agujeroExtraido === ultimoAgujero){
        return calcularAgujeroAleatorio(agujero);
    }

    ultimoAgujero = agujeroExtraido;
    return agujeroExtraido;
}

function ejecutar(){
    let tiempoJuego;
    
    switch(dificultad.value){
        case "1":
            tiempoJuego = calcularTiempoAleatorio(1000, 2500);
            break;

        case "2":
            tiempoJuego = calcularTiempoAleatorio(500, 1000);
            break;

        case "3":
            tiempoJuego = calcularTiempoAleatorio(400, 600);
            break;

        case "4":
            tiempoJuego = calcularTiempoAleatorio(100, 400);
            break;

        default:
            tiempoJuego = calcularTiempoAleatorio(500, 1000);

 }
 
    const agujero = calcularAgujeroAleatorio(agujeros);
    agujero.classList.add('up');

    setTimeout(() => {
        agujero.classList.remove('up');
        if(!tiempoFinalizado) ejecutar();
    }, tiempoJuego);

}

function iniciarJuego(){
    tableroPuntos.textContent = 0;
    puntaje = 0;
    tiempoFinalizado = false;
    ejecutar();
    setTimeout(() => tiempoFinalizado = true, 10000 );
}

function calcularGolpes(e) {
    if(!e.isTrusted) return;
    puntaje++;
    this.parentNode.classList.remove('up');
    tableroPuntos.textContent = puntaje;
}

topos.forEach(topo => topo.addEventListener('click', calcularGolpes));