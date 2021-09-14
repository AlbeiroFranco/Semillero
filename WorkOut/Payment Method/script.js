const crearContenido = function(etiqueta,tipo,nombre){
    let contenido = document.createElement(etiqueta);
    contenido.setAttribute(tipo, nombre);
    return contenido;
};

let main = document.createElement('main');
document.body.append(main);

let section1 = crearContenido('section', 'id', 'izquierda');
main.append(section1);

let asideCard = crearContenido('aside', 'id', 'tarjeta');
asideCard.classList.add('tarjeta');
section1.append(asideCard);

let delantera = crearContenido('div', 'class', 'delantera');
asideCard.append(delantera);

let logoMarca = crearContenido('div', 'class', 'logoMarca');
delantera.append(logoMarca);

let imglogo = crearContenido('img', 'class', 'imgLogo');
imglogo.src="./img/visa.png";
logoMarca.append(imglogo);

let chip = crearContenido('img', 'class', 'chip');
chip.src="./img/chip.png";
delantera.append(chip);

let datos = crearContenido('div', 'class', 'datos');
delantera.append(datos);

let grupo = crearContenido('div', 'id', 'numero');
grupo.classList.add('grupo');
datos.append(grupo);

let numTarj = crearContenido('p','class', 'label');
numTarj.textContent="Numero Tarjeta";
let numero = crearContenido('p','class', 'numero');
numero.textContent="#### #### #### ####"
grupo.append(numTarj,numero);

let flex = crearContenido('div', 'class', 'flexbox');
delantera.append(flex);

let grupo2 = crearContenido('div', 'id', 'nombre');
grupo2.classList.add('grupo');
flex.append(grupo2);

let nomTarj = crearContenido('p', 'class', 'label');
nomTarj.textContent="Nombres y Apellidos"
let nombre = crearContenido('p', 'class', 'nombre');
nombre.textContent="Albeiro Franco";
grupo2.append(nomTarj,nombre);

let grupo3 = crearContenido('div', 'id', 'expiracion')
grupo3.classList.add('grupo');
flex.append(grupo3);

let expiracion = crearContenido('p', 'class', 'label');
expiracion.textContent="Expiracion"
let fechaExpiracion = crearContenido('p', 'class', 'expiracion');
let spanMes = crearContenido('span', 'class', 'mes');
spanMes.textContent="MM";
let spanAño = crearContenido('span', 'class', 'año');
spanAño.textContent="AA";
fechaExpiracion.append(spanMes,spanAño);
grupo3.append(expiracion,fechaExpiracion);

let trasera = crearContenido('div', 'class', 'trasera');
asideCard.append(trasera);

let barMagnetica = crearContenido('div', 'class', 'barra-magnetica');
trasera.append(barMagnetica);

let datos2 = crearContenido('div', 'class', 'datos');
trasera.append(datos2);

let grupo4 = crearContenido('div', 'id', 'firma');
grupo4.classList.add('grupo');
datos2.append(grupo4);

let parrafo = crearContenido('p', 'class', 'label');
parrafo.textContent="Firma"
grupo4.append(parrafo);

let firma = crearContenido('div', 'class', 'firma');
grupo4.append(firma);
let parrafoFirma = document.createElement('p');
parrafoFirma.textContent="Albeiro Franco"
firma.append(parrafoFirma);

let grupo5 = crearContenido('div', 'id', 'ccv');
grupo5.classList.add('grupo');
datos2.append(grupo5);

let parrafoCcv = crearContenido('p', 'class', 'label');
parrafoCcv.textContent="CCV";
let parrafoCcv1 = crearContenido('p', 'class', 'ccv');
grupo5.append(parrafoCcv, parrafoCcv1);

let leyenda = crearContenido('div', 'class', 'leyenda');
leyenda.textContent="Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi aliquet congue a sed luctus primis";
trasera.append(leyenda);

let linkBanco = crearContenido('a', 'class' , 'link-banco');
linkBanco.href="#";
linkBanco.textContent="www.mibanco.com"
trasera.append(linkBanco);





let section2 = crearContenido('section', 'id', 'derecha');
main.append(section2);

let titulo = document.createElement('h1');
titulo.textContent= "PAYMENT METHODS";
section2.append(titulo);

let label1 = document.createElement('label');
label1.textContent="Nombres y Apellidos";
section2.append(label1);

let input1 = document.createElement('input');
input1.type = "text";
input1.placeholder = "Ingresa Nombres y Apellidos";
section2.append(input1);

let label2 = document.createElement('label');
label2.textContent="Numero de Tarjeta";
section2.append(label2);

let input2 = document.createElement('input');
input2.type = "text";
input2.placeholder = "Ingresa Numero de tarjeta";
section2.append(input2);

let fechaCodigo = crearContenido('div', 'class', 'fechaCodigo');
section2.append(fechaCodigo)

let div1 = crearContenido('div', 'class', 'div1');
fechaCodigo.append(div1);

let label3 = document.createElement('label');
label3.textContent="Fecha de Expiracion";
div1.append(label3);

let cajaMesAño = crearContenido('div', 'class','cajaMesAño');
div1.append(cajaMesAño);

let select1 = crearContenido('select', 'id', 'selectMes');
select1.name='mes';
cajaMesAño.append(select1);

let inputMes = crearContenido('option', 'class', 'mes');
inputMes.textContent =  "Mes";
select1.append(inputMes);

let select2 = crearContenido('select', 'id', 'selectMes');
select2.name='mes';
cajaMesAño.append(select2);

let inputAño = crearContenido('option', 'class', 'selectAño');
inputAño.textContent =  "Año";
select2.append(inputAño);

let div2 = crearContenido('div', 'class', 'div2');
fechaCodigo.append(div2);

let label4 = document.createElement('label');
label4.textContent="Codigo de Seguridad";
div2.append(label4);

let inputCodigo = document.createElement('input')
inputCodigo.value =  "CCV";
div2.append(inputCodigo);

let img2 = crearContenido('img', 'class', 'tipoCard');
img2.src="./img/image 5.png";
section2.append(img2);

let button = document.createElement('button');
button.textContent = "CONFIRM";
section2.append(button);

asideCard.addEventListener('click', () => {
   asideCard.classList.toggle('active');

})




