import { datos , cuentas, moneda1 } from "./datos.js";

let crearContenido = function(etiqueta , tipo, nombre){
    let tag = document.createElement(etiqueta);
    tag.setAttribute(tipo, nombre);
    return tag;
};

let main = document.createElement('main');
document.body.append(main);

let titulo = document.createElement('h1');
titulo.textContent = 'Subir extracto bancario';
main.append(titulo);

let nitFecha = crearContenido('div', 'class', 'nitFecha');
main.append(nitFecha);

let nit = document.createElement('p');
nit.textContent = 'DEMO SAS  NIT 85.133.458-9';
nitFecha.append(nit);

let fechap = crearContenido('p', 'class', 'fechap');
nitFecha.append(fechap);

let container = crearContenido('section', 'class', 'container');
main.append(container);

let formulario = crearContenido('form', 'class', 'formulario');
container.append(formulario);

let div0 = crearContenido('div', 'class', 'div0');
formulario.append(div0);

let procesar = crearContenido('label', 'class', 'procesar');
procesar.textContent = 'Archivo a procesar';
div0.append(procesar);

let divSeleccionar = crearContenido('div', 'class', 'divSeleccionar');
div0.append(divSeleccionar);

let procesarInput = crearContenido('input', 'class', 'selArchivo');
procesarInput.type='file';
divSeleccionar.append(procesarInput);


let div1 = crearContenido('div', 'class', 'div1');
formulario.append(div1);

let archivo = crearContenido('label', 'class', 'archivo');
archivo.textContent='Archivo en ceros: ';
div1.append(archivo);

let archivoSwitch = crearContenido('label', 'class', 'switch');
div1.append(archivoSwitch);

let archivoInput = crearContenido('input', 'class', 'archivoInput');
archivoInput.type= 'checkbox';
archivoSwitch.append(archivoInput);

let spanSwitch = crearContenido('span', 'class', 'slider');
archivoSwitch.append(spanSwitch);

let div2 = crearContenido('div', 'class', 'div2');
formulario.append(div2);

let mes = crearContenido('label', 'class', 'mes');
mes.textContent='Mes: ';
div2.append(mes)

let mesInput = crearContenido('input', 'class', 'mesInput');
mesInput.type= 'date';
div2.append(mesInput);

let div3 = crearContenido('div', 'class', 'div3');
formulario.append(div3);

let bancos = crearContenido('label', 'class', 'bancos');
bancos.textContent='Bancos: ';
div3.append(bancos)

let bancosSelect = crearContenido('select', 'class', 'bancosSelect');
div3.append(bancosSelect);

let div4 = crearContenido('div', 'class', 'div4');
formulario.append(div4);

let cuenta = crearContenido('label', 'class', 'cuenta');
cuenta.textContent='Cuenta: ';
div4.append(cuenta)

let cuentaSelect = crearContenido('select', 'class', 'cuentaSelect');
div4.append(cuentaSelect);

let div5 = crearContenido('div', 'class', 'div5');
formulario.append(div5);

let moneda = crearContenido('label', 'class', 'moneda');
moneda.textContent='Moneda Conciliación: ';
div5.append(moneda);

let monedaSelect = crearContenido('select', 'class', 'monedaSelect');
div5.append(monedaSelect);

let subir = crearContenido('input', 'class', 'subir');
subir.type = 'submit';
subir.value = 'Subir Archivos';
container.append(subir);

for (let i= 0; i < datos.length; i++) {
    bancosSelect.innerHTML += `<option value ='${i}'>${datos[i]}</option>`;
}

for (let i= 0; i < cuentas.length; i++) {
    cuentaSelect.innerHTML += `<option value ='${i}'>${cuentas[i]}</option>`;
}

for (let i= 0; i < moneda1.length; i++) {
    monedaSelect.innerHTML += `<option value ='${i}'>${moneda1[i]}</option>`;
}

archivoInput.addEventListener('click', ()=>{
    div0.classList.toggle('ocultar');
})


function actualizarHora() {
    let hoy = new Date();

    let horas = hoy.getHours() < 10 ? `0${hoy.getHours()}` : hoy.getHours();
    let segundos = hoy.getSeconds() < 10 ? `0${hoy.getSeconds()}` : hoy.getSeconds();
    let minutos = hoy.getMinutes() < 10 ? `0${hoy.getMinutes()}` : hoy.getMinutes();
    
    let dia = hoy.getDate() < 10 ? `0${hoy.getDate()}` : hoy.getDate();
    let mes = hoy.getMonth()+1 < 10 ? `0${hoy.getMonth()+1}` : hoy.getMonth()+1;
    let año = hoy.getFullYear() < 10 ? `0${hoy.getFullYear()}` : hoy.getFullYear();

    let fecha = dia + ' - ' + mes + ' - '+ año;
    let hora = horas + ':' + minutos + ':' + segundos;
    let fechaHora = fecha + ' ' + hora;

    fechap.innerHTML='Fecha: '+ fechaHora;
}

setInterval(actualizarHora, 1000);

let verificar = document.querySelectorAll('option')
formulario.addEventListener('submit', (e) => { 
    e.preventDefault();

    if(verificar.value == [0]){
        console.log('hola')
    }
})


